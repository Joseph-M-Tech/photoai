'use client';

import { User, LogOut } from 'lucide-react';
import { useState } from 'react';

// This is a mock for authentication state. Replace with real context (e.g., Auth.js, Firebase) later.
const useMockAuth = () => {
  const [user, setUser] = useState(null); // Start as logged out. Set to `{ name: 'John Doe' }` to simulate logged in.

  const signIn = () => setUser({ name: 'John Doe', email: 'john@example.com' });
  const signOut = () => setUser(null);

  return { user, signIn, signOut };
};

export default function AccountButton() {
  const { user, signIn, signOut } = useMockAuth();

  if (user) {
    return (
      <div className="relative group">
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100">
          <User className="h-5 w-5" />
          <span className="hidden sm:inline">My Account</span>
        </button>
        <div className="absolute right-0 mt-2 w-48 origin-top-right bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-transform focus:outline-none z-50">
          <div className="py-1" role="menu">
            <div className="px-4 py-2 text-sm text-gray-700 border-b">
              <p>Signed in as</p>
              <p className="font-medium truncate">{user.email}</p>
            </div>
            <button
              onClick={signOut}
              className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
              role="menuitem"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign out
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={signIn}
      className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:opacity-90"
    >
      Sign In
    </button>
  );
}