import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { login, logout, onUserStateChange } from '../api/firebase';
import { UserType } from '../components/Types';

interface AuthContextType {
  user?: UserType;
  login: typeof login;
  logout: typeof logout;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserType | null | undefined>();

  useEffect(() => {
    onUserStateChange((user) => setUser(user));
  }, []);

  return (
    <AuthContext.Provider value={{ user: user || undefined, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within a Provider');
  return context;
}
