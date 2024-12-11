import React from 'react';
import type { Conversation } from '../types';

interface ChatHeaderProps {
  conversation: Conversation;
}

export function ChatHeader({ conversation }: ChatHeaderProps) {
  return (
    <div className="border-b border-gray-200 p-4 bg-white">
      <div className="flex items-center space-x-3">
        <img
          src={conversation.avatar}
          alt={conversation.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h2 className="font-semibold text-gray-800">{conversation.name}</h2>
          <p className="text-sm text-gray-500">
            {conversation.online ? 'Online' : 'Offline'}
          </p>
        </div>
      </div>
    </div>
  );
}