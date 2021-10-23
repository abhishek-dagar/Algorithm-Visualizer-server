const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.text());
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS,DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Access-Control-Allow-Headers, Content-Type, Authorization, Origin, Accept"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

const apiroute = require('./Routes/APIrouter.router')
app.use('/api',apiroute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
