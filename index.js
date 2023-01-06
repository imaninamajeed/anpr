import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const REACT_APP_DATA_PARENT_DIR = process.env.REACT_APP_DATA_PARENT_DIR || "/home/";
console.log("REACT_APP_DATA_PARENT_DIR", REACT_APP_DATA_PARENT_DIR);

const app = express();

app.use(cors());

app.get("/file", function (req, res) {
  const path = REACT_APP_DATA_PARENT_DIR + req.query.partdirectory; // linux - single slash in front
  console.log("Path", path);
  res.sendFile(path);
});

app.listen(4567, () => {
  console.log("running static file server");
});
