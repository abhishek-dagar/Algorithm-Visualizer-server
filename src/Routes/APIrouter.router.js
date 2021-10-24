const express = require("express");
const router = express.Router();
const {Hierarchy}=require('../models/Hierarchy')
const cate = new Hierarchy();
const path = require('path');

//For Getting the Algorithm Menu
router.get("/algorithms", (req, res) => {
    const categories = cate.categories;
    res.json({categories});
  });

// For getting the code content
router.get("/algorithms/:categoryKey/:algorithmKey", (req, res) => {
  const categorykey = req.params.categoryKey;
  const algorithmkey = req.params.algorithmKey;
  const algorithm = cate.find(categorykey, algorithmkey);
  res.json({algorithm});
});

// For getting the AnimatedArray
router.get("/tracers/js", (req, res) => {
  const workerPath=path.resolve(__dirname,"../Tracer/JS/worker.js")
  res.sendFile(workerPath);
});

// For sending static file
router.get("/tracers/js/worker", (req, res) => {
  const workerPath=path.resolve(__dirname,"../Tracer/JS/tracer.js")
  res.sendFile(workerPath);
});
module.exports = router;
