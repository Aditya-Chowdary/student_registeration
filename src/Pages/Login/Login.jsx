// App.js

import React, { useState } from "react";
import "./Login.css"; // Import your CSS file

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpMode, setIsOtpMode] = useState(false);

  const handleLogin = () => {
    // Perform authentication logic here
    if (isOtpMode) {
      // Authenticate with OTP
      console.log("Logging in with OTP:", { username, otp });
    } else {
      // Authenticate with password
      console.log("Logging in with password:", { username, password });
    }
  };

  const toggleAuthMethod = () => {
    setIsOtpMode(!isOtpMode);
  };

  return (
    <div className="whole">
      <div className="login-container">
        <h2>Login</h2>
        <div className="input-container">
          <label htmlFor="username">Username (Email or Phone Number):</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {isOtpMode ? (
          <div className="input-container">
            <label htmlFor="otp">OTP:</label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
        ) : (
          <div className="input-container">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            
        )} <div className="switchContainer" onClick={toggleAuthMethod}>
        {isOtpMode ? "Login with Password" : "Login with OTP"}
      </div>
        <div className="button-container">
          <button onClick={handleLogin}>Login</button>
        </div>
       
      </div>
    </div>
  );
};

export default Login;
