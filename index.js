import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/file", function (req, res) {
  const path = "/mnt/anpr/" + req.query.partdirectory; // linux - single slash in front
  console.log("Path", path);
  res.sendFile(path);
});

app.listen(4567, () => {
  console.log("running static file server");
});
