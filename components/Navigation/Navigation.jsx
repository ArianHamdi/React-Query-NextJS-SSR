import styles from './Navigation.module.scss';
import Link from 'next/link';

function Navigation() {
    return (
        <div className={styles.navigation}>
            <ul>
                <li>
                    <Link href='/'>
                        Home
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;