import { useQuery } from '@tanstack/react-query';
import * as api from 'api/posts';

export const usePost = (id) => {
    return useQuery(['post', id], () => api.getPost(id));
}