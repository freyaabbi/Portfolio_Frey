import React from "react";
import { Search, Menu, HelpCircle, Settings, Grid, Bell } from "lucide-react";
import { profileData } from "../../data";
import { Avatar, AvatarFallback } from "../ui/avatar";

export function TopBar() {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b bg-white h-16 shrink-0">
      <div className="flex items-center gap-4 min-w-0 w-64">
        <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600 transition-colors">
          <Menu className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-lg shadow-sm">
            F
          </div>
          <span className="text-xl text-gray-600 tracking-tight font-medium hidden sm:inline-block">Identity</span>
        </div>
      </div>

      <div className="flex-1 max-w-2xl px-4">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400 group-focus-within:text-gray-600" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border-transparent bg-gray-100 rounded-full leading-5 focus:bg-white focus:border-transparent focus:ring-0 focus:shadow-[0_1px_3px_rgba(0,0,0,0.12)] sm:text-sm transition-all outline-none"
            placeholder={`Search ${profileData.name}'s portfolio...`}
            readOnly
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Settings className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-2 w-64">
        <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600 transition-colors hidden sm:block">
          <HelpCircle className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600 transition-colors hidden sm:block">
          <Settings className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600 transition-colors hidden sm:block">
          <Grid className="w-5 h-5" />
        </button>
        <div className="pl-2 relative">
          <Avatar className="h-9 w-9 border-2 border-white shadow-sm cursor-pointer hover:ring-2 hover:ring-gray-200 transition-all">
            <AvatarFallback className="bg-blue-100 text-blue-700 font-medium">FA</AvatarFallback>
          </Avatar>
          <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></div>
        </div>
      </div>
    </header>
  );
}
