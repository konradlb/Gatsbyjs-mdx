import React from "react";
import { graphql } from "gatsby";

import Post from "../components/Post/post";

const IndexPage = ({ data }) => {
  console.log("data.site");
  console.log(data);

  const { site, allMdx } = data;

  const { author, description, siteUrl, social, title } = site.siteMetadata;
  const { nodes: posts } = allMdx;

  console.log("posts");
  console.log(posts);

  return (
    <main>
      <title>{title}</title>
      <h1> Blog Posts</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </main>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        author {
          name
          summary
        }
        description
        siteUrl
        social {
          twitter
        }
        title
      }
    }
    allMdx(sort: { frontmatter: { date: ASC } }, filter: {}) {
      nodes {
        id
        tableOfContents
        frontmatter {
          description
          published
          title
          date
          category
        }
        excerpt
      }
      pageInfo {
        currentPage
        hasNextPage
        itemCount
        pageCount
      }
    }
  }
`;
