import Link from 'next/link';
import styles from '@/styles/components/layout/Header.module.css';

interface NavigationProps {
    closeMenu?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ closeMenu }) => {
    const handleClick = () => {
        if (closeMenu) closeMenu();
    };

    return (
        <nav className={styles.navigation}>
            <ul className={styles.navList}>
                {/*
                <li className={styles.navItem}>
                    <Link href="/token" className={styles.link} onClick={handleClick}>Token</Link>
                </li>
                */}
                <li className={styles.navItem}>
                    <Link href="/pre-seed" className={styles.link} onClick={handleClick}>Pre-Seed</Link>
                </li>
                {/*
                <li className={styles.navItem}>
                    <Link href="/search" className={styles.link} onClick={handleClick}>Search</Link>
                </li>
                */}
                <li className={styles.navItem}>
                    <Link href="/voucher" className={styles.link} onClick={handleClick}>Voucher</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/partners" className={styles.link} onClick={handleClick}>Partners</Link>
                </li>
                {/*
                <li className={styles.navItem}>
                    <Link href="/staking" className={styles.link} onClick={handleClick}>Staking</Link>
                </li>
                */}
                <li className={styles.navItem}>
                    <Link href="https://docs.degym.net/" className={styles.link} onClick={handleClick}>Docs</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;