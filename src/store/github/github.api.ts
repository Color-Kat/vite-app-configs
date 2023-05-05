import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ISearchUsersResponse, IUserItem} from "@/types/gihubApiTypes";

export const githubApi = createApi({
    reducerPath: 'github/api',
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
    }) ,
});

export const {useSearchUsersQuery} = githubApi;