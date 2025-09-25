const express = require("express");
const { nanoid } = require("nanoid");
const cors = require("cors");
const colors = require("colors");

const URL = require(`${process.cwd()}/src/schemas/url.js`);

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;


app.post("/shorten", async (req, res) => {
  try {
    const { originalUrl } = req.body;
    if (!originalUrl) {
      return res.status(400).json({ error: "Original URL is required" });
    }

    const shortId = nanoid(6);
    const newUrl = new URL({
      originalUrl,
      shortId,
      shortUrl: `http://localhost:${PORT}/${shortId}`,
      CreatedAt: new Date()
    });

    await newUrl.save();

    res.json({ shortUrl: `http://localhost:${PORT}/${shortId}` });
  } catch (err) {
    console.error("❌ Hata:", err);
    res.status(500).json({ error: "Sunucu hatası", detail: err.message });
  }
});


app.get("/:shortId", async (req, res) => {
  try {
    const { shortId } = req.params;
    const urlEntry = await URL.findOne({ shortId });

    if (urlEntry) {
      return res.redirect(urlEntry.originalUrl);
    } else {
      res.status(404).json({ error: "Kısa URL bulunamadı" });
    }
  } catch (error) {
    console.error("❌ Hata:", error);
    res.status(500).json({ error: "Sunucu hatası", detail: error.message });
  }
});


app.listen(PORT, () => {
    console.log(colors.green(`✅ Server is running on http://localhost:${PORT}`));
});