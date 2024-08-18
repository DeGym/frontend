import React from 'react';
import Link from 'next/link';

interface ListItemProps {
    href?: string;
    children: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ href, children }) => {
    if (href) {
        return (
            <li>
                <Link href={href}>{children}</Link>
            </li>
        );
    }

    return <li>{children}</li>;
};

interface ListProps {
    items: React.ReactNode[];
}

const List: React.FC<ListProps> = ({ items }) => {
    return <ul>{items.map((item, index) => <ListItem key={index}>{item}</ListItem>)}</ul>;
};

export default List;