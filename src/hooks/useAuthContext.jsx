import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "El useAuthContext debe ser llamado dentro del AuthProvider"
    );
  }

  return context;
};

export default useAuthContext;
