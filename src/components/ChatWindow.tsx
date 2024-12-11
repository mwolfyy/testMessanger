import React from 'react';
import { MessageInput } from './MessageInput';
import { MessageList } from './MessageList';
import { ChatHeader } from './ChatHeader';
import { EmptyState } from './EmptyState';
import type { Message, Conversation } from '../types';

interface ChatWindowProps {
  messages: Message[];
  activeConversation: Conversation | null;
  onSendMessage: (text: string) => void;
  onSendImage: (file: File) => void;
  onStartCall: () => void;
  onEndCall: () => void;
  isCallActive: boolean;
}

export function ChatWindow({
  messages,
  activeConversation,
  onSendMessage,
  onSendImage,
  onStartCall,
  onEndCall,
  isCallActive
}: ChatWindowProps) {
  if (!activeConversation) {
    return <EmptyState />;
  }

  return (
    <div className="flex-1 flex flex-col h-screen">
      <ChatHeader conversation={activeConversation} />
      <MessageList messages={messages} />
      <MessageInput
        onSendMessage={onSendMessage}
        onSendImage={onSendImage}
        onStartCall={onStartCall}
        onEndCall={onEndCall}
        isCallActive={isCallActive}
      />
    </div>
  );
}