export const postType = `#graphql
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
