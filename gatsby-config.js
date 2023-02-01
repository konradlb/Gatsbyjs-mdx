/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "gatsby crash course",
    author: {
      name: "Konrad",
      summary: "summary",
    },
    description: "A simple crash course",
    image: "",
    siteUrl: "https://localhost:8001",
    social: {
      twitter: "konrad_twit",
    },
  },
  plugins: [
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/blog`,
        name: "blog",
      },
    },
  ],
};
