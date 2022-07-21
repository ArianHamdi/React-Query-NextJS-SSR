import { getPost } from 'api/posts';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { withCSR } from 'HOC/with-CSR'
import { config } from 'lib/react-query-config'
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

    const queryClient = new QueryClient(config);

    let isError = false;

    try {
        await queryClient.fetchQuery(['post', id], () => getPost(id));
    } catch (error) {
        isError = true
        ctx.res.statusCode = error.response.status;
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