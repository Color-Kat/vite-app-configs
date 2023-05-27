import Page from '@/components/PageTemplates/Page';
import { ReposList, ReposListRefType } from '@/modules/RepoList';
import SearchUsers from '@/pages/HomePage/components/SearchUsers';
import { useRef } from "react";

export const HomePage = () => {
    const reposListRef = useRef<ReposListRefType>(null);

    const userClickHandler = (username: string) => {
        reposListRef.current.fetchRepos(username);
    }

    return (
        <Page
            title="Search GH repositories"
        >
            <SearchUsers onUserClick={userClickHandler} />

            <ReposList ref={reposListRef} />
        </Page>
    );
}