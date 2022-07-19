import styles from './PostLink.module.scss';
import Link from 'next/link';

const PostLink = ({ id }) => {
    return (
        <Link className={styles.link} href={'posts/' + id} shallow={true}> {/* this shallow routing has no effect */}
            {id}
        </Link>
    )
}

export default PostLink;