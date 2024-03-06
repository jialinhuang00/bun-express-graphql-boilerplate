export const typeDefs = `#graphql
  type Query {
    SampleHello: String
    SampleBeta: BetaResponse
  }

  type BetaResponse {
    a: String
    b: String
    c: String
  }
`;
