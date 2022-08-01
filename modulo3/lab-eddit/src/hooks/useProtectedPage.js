import { useEffect } from "react";
import { useNavigate } from "react-router";
import { goToLoginPage } from "../routes/coordinator";

export const useProtectedPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      goToLoginPage(navigate);
    }
  });
};
