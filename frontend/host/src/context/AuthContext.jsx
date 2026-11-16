import React, { createContext, useContext, useMemo, useState, useCallback } from 'react';

// Context + custom hook pattern. Deliberately scoped to the host shell:
// a Context instance created here is NOT automatically visible inside
// independently-built remotes, even with react shared as a singleton,
// because each remote's bundle imports its own AuthContext module (or
// none at all). To reach into remotes we pass the resolved value down
// as a prop instead — see how <RemoteSlot> is used in App.jsx.
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = useCallback((name) => setUser({ name, role: 'employee' }), []);
  const logout = useCallback(() => setUser(null), []);

  const value = useMemo(() => ({ user, login, logout }), [user, login, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
