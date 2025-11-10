const express = require("express");
const path = require("path");
const app = express();

// serve all files in same folder
app.use(express.static(__dirname));

// root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on ${PORT}`));
