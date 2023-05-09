import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IRepo, ISearchUsersResponse, IUserItem} from "@/types/gihubApiTypes";

export const testApi = createApi({
    reducerPath: 'test/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/'
    } as any),
    endpoints: (builder) => ({
        searchUsers: builder.query<IUserItem[], string>({
            query: (search: string) => ({
                url: `search/users`,
                params: {
                    q: search,
                    per_page: 10
                }
            }),
            transformResponse: (response: ISearchUsersResponse) => (response.items)
        }),
        getUserRepos: builder.query<IRepo[], string>({
            query: (username: string) => ({
                url: `users/${username}/repos`
            })
        })
    }) ,
});

export const {useSearchUsersQuery, useLazyGetUserReposQuery} = testApi;