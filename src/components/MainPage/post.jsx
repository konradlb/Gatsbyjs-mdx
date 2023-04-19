import React from 'react';

import * as classes from './post.module.css';

const Post = props => {
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
                <h1 className={classes.title}>{title}</h1>
                <p className={classes.date}>Date: {date}</p>
                <p className={classes.date}>Published: {published}</p>
                <p className={classes.date}>Category:{category}</p>
                <p className={classes.description}>
                    Description: {description}
                </p>
            </header>
            <main>Post data</main>
        </article>
    );
};

export default Post;
