import React, { useState } from "react";

function Confirmation() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");

  const validatePassword = (pwd) => {
    // must have min 8 chars, uppercase, lowercase, number, special char
    const strongPwd =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPwd.test(pwd);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "password") setPassword(value);
    if (name === "confirm") setConfirm(value);
  };

  const handleCheck = (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      setMessage("❌ Weak Password! Must have 8+ chars, A-Z, a-z, 0-9, and symbol.");
    } else if (password !== confirm) {
      setMessage("⚠️ Passwords do not match!");
    } else {
      setMessage("✅ Password set successfully!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Password Confirmation</h2>
      <form onSubmit={handleCheck}>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={password}
          onChange={handleChange}
        /><br /><br />
        <input
          type="password"
          name="confirm"
          placeholder="Confirm Password"
          value={confirm}
          onChange={handleChange}
        /><br /><br />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Confirmation;
