import SearchUsers from '@/pages/HomePage/components/SearchUsers';
import { useRef } from "react";
import ReposList, { ReposListRefType } from "./components/ReposList";

export const HomePage = () => {
    const reposListRef = useRef<ReposListRefType>(null);

    const userClickHandler = (username: string) => {
        reposListRef.current.fetchRepos(username);
    }

    return (
        <div className="py-10 flex items-center flex-col">
            <h1 className="text-center text-xl font-bold mb-5">Home Page</h1>

            <SearchUsers onUserClick={userClickHandler} />

            <ReposList ref={reposListRef} />
        </div>
    );
}