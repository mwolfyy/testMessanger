export interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: Date;
  isOwn: boolean;
  type: 'text' | 'image';
  mediaUrl?: string;
}

export interface Conversation {
  id: string;
  name: string;
  lastMessage: string;
  avatar: string;
  unread: number;
  online: boolean;
  phoneNumber: string;
}

export interface User {
  id: string;
  phoneNumber: string;
  verified: boolean;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  verificationId: string | null;
}