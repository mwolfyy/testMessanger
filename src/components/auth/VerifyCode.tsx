import React, { useState } from 'react';
import { Shield } from 'lucide-react';

interface VerifyCodeProps {
  phoneNumber: string;
  onVerify: (code: string) => void;
  onResend: () => void;
  loading: boolean;
}

export function VerifyCode({ phoneNumber, onVerify, onResend, loading }: VerifyCodeProps) {
  const [code, setCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length === 6) {
      onVerify(code);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-blue-100">
            <Shield className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Verify your phone
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            We sent a code to {phoneNumber}
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Enter 6-digit code"
              value={code}
              onChange={(e) => setCode(e.target.value.slice(0, 6))}
              pattern="[0-9]{6}"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={onResend}
              className="text-sm text-blue-600 hover:text-blue-500"
            >
              Resend code
            </button>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading || code.length !== 6}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300"
            >
              {loading ? 'Verifying...' : 'Verify'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}