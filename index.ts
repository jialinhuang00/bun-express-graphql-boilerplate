import express from "express";
import mongoose from "mongoose";

mongoose.connect(
  `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@bun-express-graphql-boi.bnhdpqp.mongodb.net/sample_training
  `
);

let db = mongoose.connection;
db.on("error", () => {
  console.error("Error while connecting to DB ERROR!!!");
});

db.on("open", function (ref) {
  console.log("Connected to mongo server SUCCESS!!");
});

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/posts", async (req, res) => {
  let collection = db.collection("posts");
  let results = await collection.find({}).limit(5).toArray();
  res.send(results).status(200);
});

app.get("/companies", async (req, res) => {
  let collection = db.collection("companies");
  let results = await collection.find({}).limit(5).toArray();
  res.send(results).status(200);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
