import React, { useEffect } from "react";

const AuthPage = () => {
  // Google OAuth function
  useEffect(() => {
    const googleAuthUrl = "http://localhost:3001/auth/google"; // Express route for Google Auth
    window.location.href = googleAuthUrl; // Redirect to Google auth page
  }, []);

  return (
    <div>
      <h1>Authenticating...</h1>
    </div>
  );
};

export default AuthPage;
