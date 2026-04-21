import React from "react";
import { InboxItem, profileData } from "../../data";
import { ArrowLeft, Archive, Trash2, Mail, Clock, MoreVertical, Reply, CornerUpRight, Printer, ExternalLink, Code } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";

interface DetailPaneProps {
  item: InboxItem | null;
  onBack?: () => void;
}

export function DetailPane({ item, onBack }: DetailPaneProps) {
  if (!item) {
    return (
      <div className="flex-1 h-full bg-white flex flex-col items-center justify-center text-gray-400">
        <Mail className="w-16 h-16 mb-4 opacity-20" />
        <p>Select an item to read</p>
      </div>
    );
  }

  const getInitials = (name: string) => {
    return name.substring(0, 2).toUpperCase();
  };

  return (
    <div className="flex-1 h-full bg-white flex flex-col min-w-0 overflow-hidden">
      {/* Action Bar */}
      <div className="h-12 border-b border-gray-100 flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-full text-gray-600 lg:hidden"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600" title="Archive">
              <Archive className="w-4 h-4" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600" title="Delete">
              <Trash2 className="w-4 h-4" />
            </button>
            <div className="w-px h-4 bg-gray-300 mx-1"></div>
            <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600" title="Mark unread">
              <Mail className="w-4 h-4" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600" title="Snooze">
              <Clock className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">1 of many</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-6">
          {/* Subject Header */}
          <div className="flex items-start justify-between mb-8">
            <h1 className="text-2xl font-normal text-gray-900 leading-tight">
              {item.subject}
            </h1>
            <div className="flex gap-2 shrink-0 ml-4">
              <button className="p-2 hover:bg-gray-100 rounded-full text-gray-500">
                <Printer className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full text-gray-500">
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Email Header */}
          <div className="flex items-start justify-between mb-8">
            <div className="flex gap-3">
              <Avatar className="h-10 w-10 shrink-0 bg-blue-100 text-blue-700">
                <AvatarFallback>{getInitials(item.sender)}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-gray-900">{item.sender}</span>
                  <span className="text-xs text-gray-500">&lt;noreply@{item.sender.toLowerCase().replace(/[^a-z]/g, '')}.com&gt;</span>
                </div>
                <div className="text-xs text-gray-500 mt-0.5">
                  to me <span className="text-gray-400">▾</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              {item.date} ({item.date.includes('202') ? 'historical' : 'recent'})
              <div className="flex gap-1">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Reply className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Email Body */}
          <div className="pl-12">
            <div className="prose prose-sm sm:prose-base prose-blue max-w-none text-gray-800 whitespace-pre-wrap font-sans">
              {item.content}
            </div>

            {/* Tags/Attachments Section */}
            {item.tags && item.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-3 flex items-center gap-2">
                  <span className="font-medium text-gray-700">{item.tags.length} Attachments</span> (Skills & Tech Stack)
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer transition-colors bg-gray-50/50"
                    >
                      <div className="w-6 h-6 rounded bg-blue-100 flex items-center justify-center text-blue-600">
                        <Code className="w-3 h-3" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Reply Buttons */}
            <div className="mt-12 flex gap-3">
              <button className="flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                <Reply className="w-4 h-4" /> Reply
              </button>
              <button className="flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                <CornerUpRight className="w-4 h-4" /> Forward
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
