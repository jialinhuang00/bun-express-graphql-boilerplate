import { ObjectId } from "mongodb";
import mongoose from "mongoose";

export const companySchema = new mongoose.Schema({
  _id: ObjectId,
  name: String,
  permalink: String,
  crunchbase_url: String,
  homepage_url: String,
  blog_url: String,
  blog_feed_url: String,
  twitter_username: String,
  category_code: String,
  number_of_employees: Number,
  founded_year: Number,
  founded_month: Number,
  founded_day: Number,
  deadpooled_year: Number,
  tag_list: String,
  alias_list: String,
  email_address: String,
  phone_number: String,
  description: String,
  created_at: Date,
  updated_at: Date,
  overview: String,
  image: Object,
  products: [
    {
      name: String,
      permalink: String,
    },
  ],
  relationships: [
    {
      is_past: Boolean,
      title: String,
      person: String,
    },
  ],
});

export const Companies = mongoose.model("Companies", companySchema);
