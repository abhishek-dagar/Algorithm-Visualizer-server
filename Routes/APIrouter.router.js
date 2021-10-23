const express = require("express");
const router = express.Router();

//For Getting the Algorithm Menu
router.get("/AlgorithmMenu", (req, res) => {
    const AlgoMenu = require("../hierarchy/AlgorithmList");
    const AM = AlgoMenu();
    res.json(AM);
  });

// For getting the code content
router.get("/getAlgorithm/:categoryKey/:algorithmKey", (req, res) => {
  const worker = require("../Tracer/worker");
  const categorykey = req.params.categoryKey;
  const algorithmkey = req.params.algorithmKey;
  const files = worker(categorykey, algorithmkey);
  res.json(files);
});

// For getting the AnimatedArray
router.post("/tracers/js", (req, res) => {
  const tracer = require("../Tracer/JS/tracer");
  const commands = tracer(req.body.code);
  if (commands.message) {
    res.status(400).json(commands);
  }
  res.send(commands);
});
module.exports = router;
