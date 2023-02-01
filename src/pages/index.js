import React from "react";
import { graphql } from "gatsby";

import Post from "../components/Post";
import Seo from "../components/Seo";

const IndexPage = ({ data }) => {
  console.log("data.site");
  console.log(data);

  const { allMdx } = data;

  const { nodes: posts } = allMdx;

  console.log("posts");
  console.log(posts);

  return (
    <main>
      <h1> Blog Posts</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </main>
  );
};

export default IndexPage;

export const Head = () => <Seo />;

export const pageQuery = graphql`
  {
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
