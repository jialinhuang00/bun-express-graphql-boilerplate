export const typeDefs = `#graphql
  type Query {
    getFirstTenCompanies: [Company]
    getFirstFivePosts: [Post]
  }

 type Company {
        _id: ID
        name: String
        permalink: String
        crunchbase_url: String
        homepage_url: String
        blog_url: String
        blog_feed_url: String
        twitter_username: String
        category_code: String
        number_of_employees: Int
        founded_year: Int
        founded_month: Int
        founded_day: Int
        deadpooled_year: Int
        tag_list: String
        alias_list: String
        email_address: String
        phone_number: String
        description: String
        created_at: String
        updated_at: String
        overview: String
        image: String
        products: [Product]
        relationships: [Relationship]
    }

    # type Image {
    #     # available_sizes: [[[Number], String]]
    # }

    type Product {
        name: String
        permalink: String
    }

    type Relationship {
        is_past: Boolean
        title: String
        person: String
    }
    type Comment {
        body: String
        email: String
        author: String
    }

    type Post {
        _id: ID
        body: String
        permalink: String
        author: String
        title: String
        tags: [String]
        comments: [Comment]
        date: String
    }

`;
