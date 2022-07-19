import styles from './PostPage.module.scss';
import Post from 'components/Post';
import Pagination from 'components/Pagination';
import Loader from 'components/Loader';
import { useRouter } from 'next/router';
import { usePost } from 'hooks/api/posts';

const PostPage = () => {

    const { query: { id } } = useRouter();

    const { data, isLoading } = usePost(id);

    if (isLoading) return <Loader />

    return (
        <div className={styles.page}>
            <Post id={data.id} title={data.title} body={data.body} />
            <div className={styles.pagination}>
                <Pagination id={id} />
            </div>
        </div>
    )
}

export default PostPage;