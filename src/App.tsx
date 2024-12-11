import React, { useState } from 'react';
import { PhoneLogin } from './components/auth/PhoneLogin';
import { VerifyCode } from './components/auth/VerifyCode';
import { Sidebar } from './components/Sidebar';
import { ChatWindow } from './components/ChatWindow';
import { initialConversations, initialMessages } from './data/mockData';
import type { Message, Conversation, AuthState } from './types';

function App() {
  const [auth, setAuth] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    verificationId: null,
  });
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState(initialConversations);
  const [activeConversationId, setActiveConversationId] = useState<string | null>(null);
  const [messages, setMessages] = useState(initialMessages);
  const [isCallActive, setIsCallActive] = useState(false);

  const handlePhoneSubmit = async (phoneNumber: string) => {
    setLoading(true);
    // Simulate SMS code sending
    setTimeout(() => {
      setAuth(prev => ({ ...prev, verificationId: '123456' }));
      setLoading(false);
    }, 1500);
  };

  const handleVerifyCode = async (code: string) => {
    setLoading(true);
    // Simulate verification
    setTimeout(() => {
      setAuth({
        user: { id: '1', phoneNumber: '1234567890', verified: true },
        isAuthenticated: true,
        verificationId: null,
      });
      setLoading(false);
    }, 1500);
  };

  const handleSendMessage = (text: string) => {
    if (!activeConversationId) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'You',
      timestamp: new Date(),
      isOwn: true,
      type: 'text',
    };

    setMessages(prev => ({
      ...prev,
      [activeConversationId]: [...(prev[activeConversationId] || []), newMessage],
    }));

    setConversations(prev =>
      prev.map(conv =>
        conv.id === activeConversationId
          ? { ...conv, lastMessage: text, unread: 0 }
          : conv
      )
    );
  };

  const handleSendImage = async (file: File) => {
    if (!activeConversationId) return;

    // In a real app, you would upload the image to a server here
    const imageUrl = URL.createObjectURL(file);
    
    const newMessage: Message = {
      id: Date.now().toString(),
      text: 'Sent an image',
      sender: 'You',
      timestamp: new Date(),
      isOwn: true,
      type: 'image',
      mediaUrl: imageUrl,
    };

    setMessages(prev => ({
      ...prev,
      [activeConversationId]: [...(prev[activeConversationId] || []), newMessage],
    }));
  };

  if (!auth.isAuthenticated) {
    if (auth.verificationId) {
      return (
        <VerifyCode
          phoneNumber="1234567890"
          onVerify={handleVerifyCode}
          onResend={() => handlePhoneSubmit('1234567890')}
          loading={loading}
        />
      );
    }
    return <PhoneLogin onSubmit={handlePhoneSubmit} loading={loading} />;
  }

  const activeConversation = conversations.find(c => c.id === activeConversationId) || null;
  const activeMessages = activeConversationId ? messages[activeConversationId] || [] : [];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        conversations={conversations}
        activeConversation={activeConversationId || ''}
        onSelectConversation={setActiveConversationId}
      />
      <ChatWindow
        messages={activeMessages}
        activeConversation={activeConversation}
        onSendMessage={handleSendMessage}
        onSendImage={handleSendImage}
        onStartCall={() => setIsCallActive(true)}
        onEndCall={() => setIsCallActive(false)}
        isCallActive={isCallActive}
      />
    </div>
  );
}

export default App;