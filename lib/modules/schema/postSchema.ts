import { ObjectId } from "mongodb";
import mongoose from "mongoose";

export const postSchema = new mongoose.Schema({
  _id: ObjectId,
  body: String,
  permalink: String,
  author: String,
  title: String,
  tags: [String],
  comments: [
    {
      body: String,
      email: String,
      author: String,
    },
  ],
  date: Date,
});

export const Post = mongoose.model("Post", postSchema);
