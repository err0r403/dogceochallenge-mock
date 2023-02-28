const express = require("express");
const axios = require("axios");

const app = express();
const BASE_URL = "https://dog.ceo/api";

// GET /breeds/list - get a list of all dog breeds
app.get("/api/breeds/list/all", async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/breeds/list`);
    const { message } = response.data;
    res.json({ status: "success", message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Server Error" });
  }
});

// GET /breeds/:breed/images/random - get a random image of a specific breed
app.get("/api/breeds/:breed/images/random", async (req, res) => {
  const { breed } = req.params;
  try {
    const response = await axios.get(
      `${BASE_URL}/breed/${breed}/images/random`
    );
    const { message } = response.data;
    res.json({ status: "success", message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Server Error" });
  }
});

// GET /breeds/image/random - get a random image of any dog breed
app.get("/api/breeds/image/random", async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/breeds/image/random`);
    const { message } = response.data;
    res.json({ status: "success", message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Server Error" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
