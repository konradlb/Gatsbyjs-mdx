import React from 'react';
import { graphql } from 'gatsby';

import Post from './post';
import Seo from '../Seo';

import * as classes from './mainPage.module.css';

const MainPage = ({ data }) => {
    const { allMdx } = data;

    const { nodes: posts } = allMdx;

    return (
        <main className={classes.root}>
            <h1> Blog Posts</h1>
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </main>
    );
};

export default MainPage;

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
