import React from "react";
import { InboxItem } from "../../data";
import { Star, MoreVertical, Clock, CheckSquare } from "lucide-react";
import { cn } from "../../lib/utils";

interface ListPaneProps {
  items: InboxItem[];
  activeItemId: string | null;
  onSelectItem: (id: string) => void;
  sectionTitle: string;
}

export function ListPane({ items, activeItemId, onSelectItem, sectionTitle }: ListPaneProps) {
  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-200 w-full lg:w-[400px] xl:w-[450px] shrink-0 transition-all">
      <div className="h-12 border-b border-gray-100 flex items-center px-4 shrink-0 bg-white">
        <div className="flex items-center gap-3 text-gray-500">
          <CheckSquare className="w-4 h-4 opacity-50" />
          <span className="text-sm font-medium text-gray-600">{sectionTitle}</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {items.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <p className="text-sm">No items in this section.</p>
          </div>
        ) : (
          <ul className="divide-y divide-gray-100">
            {items.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onSelectItem(item.id)}
                  className={cn(
                    "w-full text-left px-4 py-3 flex gap-3 group hover:shadow-[inset_1px_0_0_#dadce0,inset_-1px_0_0_#dadce0,0_1px_2px_0_rgba(60,64,67,.3),0_1px_3px_1px_rgba(60,64,67,.15)] relative z-0 transition-all hover:z-10",
                    activeItemId === item.id ? "bg-[#e8f0fe] z-10" : "bg-white"
                  )}
                >
                  <div className="flex flex-col gap-2 pt-1">
                    <CheckSquare className="w-4 h-4 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Star className="w-4 h-4 text-gray-300 hover:text-yellow-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline mb-0.5">
                      <span className={cn(
                        "text-sm truncate pr-2",
                        !item.read ? "font-bold text-gray-900" : "font-medium text-gray-700"
                      )}>
                        {item.sender}
                      </span>
                      <span className={cn(
                        "text-xs whitespace-nowrap",
                        !item.read ? "font-bold text-blue-600" : "text-gray-500"
                      )}>
                        {item.date}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className={cn(
                        "text-sm truncate",
                        !item.read ? "font-bold text-gray-900" : "text-gray-800"
                      )}>
                        {item.subject}
                      </span>
                      <span className="text-sm text-gray-500 truncate">
                        {item.snippet}
                      </span>
                    </div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
