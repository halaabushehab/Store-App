

const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 9511;

app.use(cors());
app.use(express.json());


app.get("/api/products", async (req, res) => {
  try {
    const response = await axios.get("https://6784de3b1ec630ca33a61161.mockapi.io/Products"); 
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching products", details: error.message });
  }
});





app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


