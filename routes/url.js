const express = require("express");
const {
  handleGenerateShortURL,
  handleRedirectURL,
  getHandleAnalytics,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateShortURL);

router.get("/:shortId", handleRedirectURL);

router.get("/analytics/:shortId", getHandleAnalytics);

module.exports = router;
