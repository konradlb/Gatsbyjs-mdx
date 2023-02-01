import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          description
          image
          siteUrl
          social {
            twitter
          }
          title
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
