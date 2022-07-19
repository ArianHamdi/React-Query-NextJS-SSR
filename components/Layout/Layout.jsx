import styles from './Layout.module.scss';
import Navigation from 'components/Navigation';

function Layout({ children }) {
    return (
        <div className={styles.layout}>
            <Navigation />
            <div className={styles.children}>
                {children}
            </div>
        </div>
    )
}

export default Layout;