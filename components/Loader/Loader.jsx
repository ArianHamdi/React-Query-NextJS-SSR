import styles from './Loader.module.scss';

function Loader() {
    return (
        <div className={styles.loader}>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
    )
}

export default Loader;