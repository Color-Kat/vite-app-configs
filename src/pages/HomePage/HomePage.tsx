import react, {useEffect, useState} from 'react';
import {useSearchUsersQuery} from "@/store/github/github.api";
import {useDebounce} from "@hooks/debounce";
import {log} from "util";

export const HomePage = () => {
    const {isLoading, data, isError} = useSearchUsersQuery('ColorKat');
    const [search, setSearch] = useState('');
    const debouncedSearch = useDebounce(search);

    console.log(data)

    useEffect(() => {
        console.log(debouncedSearch)
    }, [debouncedSearch]);

    return (
        <div className="py-10">
            <h1 className="text-center text-xl font-bold mb-5">Home Page</h1>

            {isError && <p className="text-red-600 text-center">Something went wrong...</p>}

            <div className="relative w-[540px]">
                <input
                    type="text"
                    className="border pt-2 px-4 w-full h-[42px] rounded-md bg-gray-300 text-gray-900"
                    placeholder="Search for Github username..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <div className="absolute top-[48px] left-0 right-0 max-h-[200px] shadow-md ">
                    fdsfsad
                </div>
            </div>


        </div>
    );
}