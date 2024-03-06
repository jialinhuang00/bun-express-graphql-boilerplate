import { Companies } from "@/lib/modules/schema/mongoose/companySchema";
import { Posts } from "@/lib/modules/schema/mongoose/postSchema";

export const resolvers = {
  Query: {
    async getAllCompanies() {
      return await Companies.find({}).limit(10);
    },
    async getAllPosts() {
      return await Posts.find({});
    },
  },
};
