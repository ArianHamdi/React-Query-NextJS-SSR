import { getPost } from 'api/posts';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { config } from 'lib/react-query-config';
import { withCSR } from 'HOC/with-CSR'
import Error from 'components/Error';
import PostPage from 'containers/PostPage';

const Page = ({ isError }) => {

    if (isError) return <Error />

    return <PostPage />

}

export const getServerSideProps = withCSR(async (ctx) => {

    const { id } = ctx.params;

    const queryClient = new QueryClient(config)

    await queryClient.prefetchQuery(['post', id], () => getPost(id));

    const state = queryClient.getQueryState(['post', id]);

    const isError = !!state.error;

    if (isError) {
        ctx.res.statusCode = state.error.response.status
    }

    return {
        props: {
            isError,
            dehydratedState: dehydrate(queryClient),
        },
    }
})

export default Page;