const express = require("express");
const app = express();

// Use the port Docker gives us, OR default to 3000 if running locally
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from my custom Node.js Docker container! 🟢");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
