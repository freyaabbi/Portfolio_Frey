import React, { useState, useEffect } from "react";
import { TopBar } from "../components/layout/TopBar";
import { Sidebar } from "../components/layout/Sidebar";
import { ListPane } from "../components/layout/ListPane";
import { DetailPane } from "../components/layout/DetailPane";
import { inboxData, Section } from "../data";

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>("About");
  const [activeItemId, setActiveItemId] = useState<string | null>(null);
  const [isMobileListVisible, setIsMobileListVisible] = useState(true);

  const currentItems = inboxData[activeSection] || [];
  
  const activeItem = React.useMemo(() => {
    if (!activeItemId) return null;
    return currentItems.find(item => item.id === activeItemId) || null;
  }, [activeItemId, currentItems]);

  // When changing sections, optionally select the first item automatically on desktop
  useEffect(() => {
    if (window.innerWidth >= 1024 && currentItems.length > 0) {
      setActiveItemId(currentItems[0].id);
    } else {
      setActiveItemId(null);
    }
    setIsMobileListVisible(true);
  }, [activeSection, currentItems]);

  const handleSelectItem = (id: string) => {
    setActiveItemId(id);
    // Mark as read in a real app
    setIsMobileListVisible(false);
  };

  const handleBackToList = () => {
    setIsMobileListVisible(true);
  };

  return (
    <div className="flex flex-col h-screen w-full bg-[#f6f8fc] overflow-hidden text-gray-900 font-sans">
      <TopBar />
      
      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar - hidden on very small screens unless toggled, but visible on md+ */}
        <div className="hidden md:block shrink-0 z-20">
          <Sidebar activeSection={activeSection} onSelectSection={setActiveSection} />
        </div>

        {/* Main Content Area */}
        <div className="flex flex-1 bg-white md:rounded-tl-2xl overflow-hidden shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,0.15)] md:m-2 md:ml-0 md:mb-0">
          
          {/* List Pane - toggles with Detail Pane on mobile, side-by-side on lg+ */}
          <div className={`
            ${isMobileListVisible ? 'flex' : 'hidden'} 
            lg:flex h-full w-full lg:w-auto
          `}>
            <ListPane 
              items={currentItems} 
              activeItemId={activeItemId}
              onSelectItem={handleSelectItem}
              sectionTitle={activeSection}
            />
          </div>

          {/* Detail Pane */}
          <div className={`
            ${!isMobileListVisible ? 'flex' : 'hidden'} 
            lg:flex flex-1 h-full w-full bg-white
          `}>
            <DetailPane 
              item={activeItem} 
              onBack={handleBackToList}
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}
