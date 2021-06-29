import express from "express";
import Rollbar from "rollbar";
import { access } from "fs";
import path from "path";
const app = express();

// call rollbar.
const rollbar = new Rollbar({
    accessToken: '923eec4115a64719adab8087bab911d8',
    captureUncaught: true,
    captureUnhandledRejections: true,
  })
  
  app.use(express.static("./public"));


app.get("/", (req, res) => {
    rollbar.log("hello nerds");
    res.sendFile(path.join(__dirname, "nice.html"));
})


const port = process.env.PORT || 5000;

app.listen(port, () => {console.log("running on http://localhost:5000/")});
