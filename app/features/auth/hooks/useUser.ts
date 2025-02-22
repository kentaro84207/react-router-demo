import { useOutletContext } from "react-router";

type UserContextType = { userId: string | null };

export function useUser() {
  const contextData = useOutletContext<UserContextType>();

  return contextData?.userId || null;
}
