import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "./axios-instance";

export const useAuth = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    try {
      const response = await axiosInstance.post("/login", { email, password });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);
      localStorage.setItem("userId", response.data.userId);

      setError(null);
      navigate("/projects");
    } catch (err) {
      setError("Credenciales incorrectas");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  return { login, logout, error };
};
