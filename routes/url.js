const express = require('express');
const router = express.Router();
const { nanoid } = require('nanoid');
const Url = require('../models/Url');

router.post('/shorten', async (req, res) => {
  const { originalUrl } = req.body;

  if (!originalUrl) {
    // If originalUrl is missing, return a JSON response with an error message
    return res.status(400).json({ message: 'Original URL is required' });
  }

  const shortUrlId = nanoid(6);

  try {
    let url = await Url.findOne({ originalUrl });
    if (!url) {
      url = new Url({ originalUrl, shortUrlId });
      await url.save();
    }
    res.json({ shortUrl: `${req.protocol}://${req.get('host')}/${url.shortUrlId}` });
  } catch (error) {
    console.error('An error occurred:', error.message);
    res.status(500).json('Server error');
  }
  console.log(originalUrl)
});

router.get('/:shortUrlId', async (req, res) => {
  try {
    const url = await Url.findOne({ shortUrlId: req.params.shortUrlId });
    if (url) {
      return res.redirect(url.originalUrl);
    } else {
      res.status(404).json('URL not found');
    }
  } catch (error) {
    res.status(500).json('Server error');
  }
  console.log(url)
});

module.exports = router;
