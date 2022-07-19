import styles from './Error.module.scss';

const Error = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.status}>404</h1>
            <p className={styles.description}>THE PAGE YOU REQUESTED COULD NOT FOUND</p>
        </div>
    )
}

export default Error;