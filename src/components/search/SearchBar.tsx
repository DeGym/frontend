import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from '@/styles/components/search/SearchBar.module.css';

interface SearchBarProps {
    onSearch: (query: string) => void;
    initialQuery: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, initialQuery }) => {
    const [query, setQuery] = useState(initialQuery);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSearch} className={styles.searchBar}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search gyms"
                className={styles.searchInput}
            />
            <button type="submit" className={styles.searchButton}>
                <FaSearch />
            </button>
        </form>
    );
};

export default SearchBar;