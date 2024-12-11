import React from 'react';
import { Search, Settings } from 'lucide-react';
import { ConversationItem } from './ConversationItem';
import type { Conversation } from '../types';

interface SidebarProps {
  conversations: Conversation[];
  activeConversation: string;
  onSelectConversation: (id: string) => void;
}

export function Sidebar({ conversations, activeConversation, onSelectConversation }: SidebarProps) {
  return (
    <div className="w-80 h-screen border-r border-gray-200 flex flex-col bg-white">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-gray-800">Messages</h1>
          <Settings className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
        </div>
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {conversations.map((conversation) => (
          <ConversationItem
            key={conversation.id}
            conversation={conversation}
            isActive={activeConversation === conversation.id}
            onClick={() => onSelectConversation(conversation.id)}
          />
        ))}
      </div>
    </div>
  );
}