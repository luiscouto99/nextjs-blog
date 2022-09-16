import Link from "next/link"
import styles from './header.module.css'

export const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link href="/">HOME</Link>
                <Link href="/about">ABOUT</Link>
                <Link href="/keyboards">KEYBOARDS</Link>
            </nav>
        </header>
    )
}