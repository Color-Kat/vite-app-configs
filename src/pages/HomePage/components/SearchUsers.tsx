import Error from "@/UI/Errors/Error";
import Input from "@/UI/Form/Input";
import LoadingMessage from "@/UI/Loaders/LoadingMessage";
import { useDebounce } from "@/hooks/debounce";
import { useSearchUsersQuery } from "@/store/github/github.api";
import { IUserItem } from "@/types/gihubApiTypes";
import { FunctionComponent, useEffect, useState } from "react";

interface SearchUsersProps {
    onUserClick: (username: string) => void;
}

const SearchUsers: FunctionComponent<SearchUsersProps> = ({ onUserClick }) => {
    const [search, setSearch] = useState('');
    const debouncedSearch = useDebounce(search);

    const { isLoading, data, isError } = useSearchUsersQuery(debouncedSearch, {
        skip: debouncedSearch.length < 3
    });

    // useEffect(() => {
    //     console.log(debouncedSearch)
    // }, [debouncedSearch]);

    return (
        <div className="relative flex flex-col w-[540px]">

            {isError && <Error />}

            <Input
                placeholder='Search for Github username...'
                value={search}
                onChange={setSearch}
            />

            {data && debouncedSearch.length >= 3 && <ul
                className="w-full list-none max-h-[200px] mt-2 overflow-y-scroll no-scrollbar shadow-md ">

                {isLoading && <LoadingMessage />}

                {data?.map((user: IUserItem) => {
                    return (
                        <li
                            key={user.id}
                            onClick={() => onUserClick(user.login)}
                            className="h-12 border-b w-full border-gray-500 py-1.5 flex items-center hover:bg-gray-300 hover:text-gray-900 cursor-pointer px-2">
                            {user.login}
                        </li>
                    );
                })}
            </ul>}
        </div>
    );
}

export default SearchUsers;