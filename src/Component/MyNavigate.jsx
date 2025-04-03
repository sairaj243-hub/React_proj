import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function MyNavigate() {
  const navigate = useNavigate();
  const isLoggedIn = true; // Replace with real auth logic

  useEffect(() => {
    navigate(isLoggedIn ? "/about" : "/login");
  }, [isLoggedIn, navigate]); // Dependency array prevents loops

  return null; // Or a loading spinner
}

export default MyNavigate;