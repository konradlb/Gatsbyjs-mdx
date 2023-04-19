import React from 'react';

import * as classes from './header.module.css';

const Header = () => {
    const menuItems = [
        {
            id: 1,
            name: 'Blog',
            slug: '/'
        },
        {
            id: 2,
            name: 'Kontakt',
            slug: 'kontakt'
        },
        {
            id: 3,
            name: 'O mnie',
            slug: 'o-mnie'
        }
    ];

    return (
        <header className={classes.root}>
            {menuItems.map(item => (
                <a className={classes.link} key={item.id} href={item.slug}>
                    {item.name}
                </a>
            ))}
        </header>
    );
};

export default Header;
