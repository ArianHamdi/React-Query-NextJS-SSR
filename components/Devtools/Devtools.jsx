import { Suspense, lazy } from 'react';

const ReactQueryDevtoolsProduction = lazy(() =>
    import('@tanstack/react-query-devtools').then(d => ({
        default: d.ReactQueryDevtools,
    }))
)

const Devtools = () => {
    return (
        <Suspense fallback={null}>
            <ReactQueryDevtoolsProduction />
        </Suspense>
    )
}

export default Devtools;