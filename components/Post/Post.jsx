import styles from './Post.module.scss';

function Post({ id, title, body }) {
    return (
        <div className={styles.post}>
            <div className={styles.header}>
                <h1 className={styles.title}>{title}</h1>
                <span className={styles.id}>{id}</span>
            </div>
            <p className={styles.body}>{body}</p>
        </div>
    )
}

export default Post;