import React from 'react';
import type { Conversation } from '../types';

interface ConversationItemProps {
  conversation: Conversation;
  isActive: boolean;
  onClick: () => void;
}

export function ConversationItem({ conversation, isActive, onClick }: ConversationItemProps) {
  return (
    <div
      onClick={onClick}
      className={`p-4 cursor-pointer hover:bg-gray-50 ${
        isActive ? 'bg-blue-50' : ''
      }`}
    >
      <div className="flex items-center space-x-3">
        <div className="relative">
          <img
            src={conversation.avatar}
            alt={conversation.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          {conversation.online && (
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-800">{conversation.name}</h3>
            {conversation.unread > 0 && (
              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                {conversation.unread}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
        </div>
      </div>
    </div>
  );
}