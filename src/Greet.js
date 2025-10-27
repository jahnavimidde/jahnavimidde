import React, { useState } from "react";

function Greet() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [greet, setGreet] = useState("");

  const handleGreet = async () => {
    try {
      const res = await fetch(`http://localhost:5000/greet/${name}?title=${title}`);
      const data = await res.json();
      setGreet(data.message);
    } catch (error) {
      setGreet("❌ Unable to connect to server!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Greeting App</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <input
        type="text"
        placeholder="Enter title (optional)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br /><br />
      <button onClick={handleGreet}>Get Greeting</button>
      <p>{greet}</p>
    </div>
  );
}

export default Greet;
