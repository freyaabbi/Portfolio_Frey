import React from "react";
import { Inbox, Briefcase, Code, Award, Lightbulb, Star, Pencil, FileText } from "lucide-react";
import { Section } from "../../data";
import { cn } from "../../lib/utils";

interface SidebarProps {
  activeSection: Section;
  onSelectSection: (section: Section) => void;
}

export function Sidebar({ activeSection, onSelectSection }: SidebarProps) {
  const navItems: { id: Section; label: string; icon: React.ElementType }[] = [
    { id: "About", label: "About", icon: Inbox },
    { id: "Experience", label: "Experience", icon: Briefcase },
    { id: "Projects", label: "Projects", icon: Code },
    { id: "Skills", label: "Skills", icon: Lightbulb },
    { id: "Extracurricular", label: "Extracurricular", icon: Star },
    { id: "Achievements", label: "Achievements", icon: Award },
  ];

  return (
    <div className="w-64 flex flex-col h-full bg-white pt-2 pr-3 pb-4">
      <div className="px-2 mb-4">
        <button 
          className="flex items-center gap-4 bg-[#c2e7ff] hover:bg-[#b0dbf7] text-[#001d35] px-5 py-4 rounded-2xl font-medium transition-colors shadow-sm w-auto"
          onClick={() => window.open(`mailto:freyaabbi@gmail.com`, "_blank")}
        >
          <Pencil className="w-5 h-5" />
          Compose Mail
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto overflow-x-hidden">
        <ul className="space-y-0.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onSelectSection(item.id)}
                  className={cn(
                    "w-full flex items-center justify-between px-6 py-1.5 rounded-r-full transition-colors group",
                    isActive
                      ? "bg-[#d3e3fd] text-[#041e49] font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <Icon className={cn("w-4 h-4", isActive ? "text-[#041e49]" : "text-gray-500 group-hover:text-gray-700")} />
                    <span className="text-sm truncate">{item.label}</span>
                  </div>
                  {/* Fake unread count for vibe */}
                  {item.id === "About" && !isActive && (
                    <span className="text-xs font-bold text-gray-600">1</span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
        
        <div className="mt-8 px-6">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Labels</h3>
          <ul className="space-y-0.5">
            <li>
              <a 
                href="https://linkedin.com/in/freyaabbi" 
                target="_blank" 
                rel="noreferrer"
                className="w-full flex items-center gap-4 px-0 py-1.5 text-gray-700 hover:text-gray-900 transition-colors group"
              >
                <div className="w-4 h-4 rounded-full border-2 border-[#0a66c2] group-hover:bg-[#0a66c2] transition-colors" />
                <span className="text-sm truncate">LinkedIn</span>
              </a>
            </li>
            <li>
              <button 
                className="w-full flex items-center gap-4 px-0 py-1.5 text-gray-700 hover:text-gray-900 transition-colors group"
                onClick={() => alert("Downloading CV...")}
              >
                <div className="w-4 h-4 rounded-full border-2 border-gray-500 group-hover:bg-gray-500 transition-colors" />
                <span className="text-sm truncate">Resume.pdf</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
