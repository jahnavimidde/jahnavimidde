import React, { useState } from "react";

export default function PasswordChecklist() {
  const [password, setPassword] = useState("");

  // Password validation conditions
  const rules = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*()_+\-={}\[\]:;"'<>,.?/~`]/.test(password),
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Password Rules Checker</h2>

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: "8px", borderRadius: "5px", width: "250px" }}
      />

      <div style={{ textAlign: "left", margin: "20px auto", width: "250px" }}>
        <p style={{ color: rules.length ? "green" : "red" }}>
          {rules.length ? "✔️" : "❌"} Minimum 8 characters
        </p>
        <p style={{ color: rules.uppercase ? "green" : "red" }}>
          {rules.uppercase ? "✔️" : "❌"} At least one uppercase letter
        </p>
        <p style={{ color: rules.number ? "green" : "red" }}>
          {rules.number ? "✔️" : "❌"} At least one number
        </p>
        <p style={{ color: rules.special ? "green" : "red" }}>
          {rules.special ? "✔️" : "❌"} At least one special character
        </p>
      </div>
    </div>
  );
}
