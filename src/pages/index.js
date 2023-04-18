import React from 'react';

import MainPage from '../components/MainPage';

const IndexPage = ({ data }) => {
    return <MainPage data={data} />;
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
