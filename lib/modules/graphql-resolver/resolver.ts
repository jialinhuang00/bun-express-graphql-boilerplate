import { Companies } from "@/lib/modules/schema/mongoose/companySchema";
import { Posts } from "@/lib/modules/schema/mongoose/postSchema";

export const resolvers = {
  Query: {
    async getFirstTenCompanies() {
      return await Companies.find({}).limit(10);
    },
    async getFirstFivePosts() {
      return await Posts.find({}).limit(5);
    },
  },
};
