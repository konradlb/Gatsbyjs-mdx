import React from 'react';

import MainPage from '../components/MainPage';
import Header from '../components/Header';

import * as classes from '../css/index.module.css';

const IndexPage = ({ data }) => {
    return (
        <div className={classes.root}>
            <Header />
            <MainPage data={data} />
        </div>
    );
};

export default IndexPage;

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
