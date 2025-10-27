const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

// Root route
app.get("/", (req, res) => {
  res.send("✅ Greeting API is running! Use /greet/:name?title=YourTitle");
});

// Greet route
app.get("/greet/:name", (req, res) => {
  const { name } = req.params;
  const { title } = req.query;

  if (!name) {
    return res.json({ message: "Hello there!" });
  }

  const greeting = title ? `Hello, ${title} ${name}!` : `Hello, ${name}!`;
  res.json({ message: greeting });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
