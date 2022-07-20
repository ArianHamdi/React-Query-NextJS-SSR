import { getPost } from 'api/posts';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { withCSR } from 'HOC/with-CSR'
import Error from 'components/Error';
import PostPage from 'containers/PostPage';

const Page = ({ isError }) => {

    //show custom error component if there is an error
    if (isError) return <Error />

    return <PostPage />

}

export const getServerSideProps = withCSR(async (ctx) => {

    console.log('getServerSideProps');

    const { id } = ctx.params;

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(['post', id], () => getPost(id));

    //get post state
    const state = queryClient.getQueryState(['post', id]);

    // check if the state has error
    const isError = !!state.error;

    // if there is an error we will change response status code
    if (isError) {
        ctx.res.statusCode = state.error.response.status
    }

    return {
        props: {
            //also passing down isError state to show a custom error component.
            isError,
            dehydratedState: dehydrate(queryClient),
        },
    }
})

export default Page;