import React from 'react';

import * as classes from './post.module.css';

const Post = props => {
    console.log('post props');
    console.log(props);

    const {
        post: {
            frontmatter: { category, date, description, published, title }
            // id,
            // tableOfContents
        }
    } = props;

    return (
        <article className={classes.root}>
            <header>
                <h1>{title}</h1>
                <p>Date: {date}</p>
                <p>Published: {published}</p>
                <p>Category:{category}</p>
                <p>Description: {description}</p>
            </header>
            <main>Post data</main>
        </article>
    );
};

export default Post;
