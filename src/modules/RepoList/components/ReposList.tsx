import LoadingMessage from "@/UI/Loaders/LoadingMessage";
import { useLazyGetUserReposQuery } from "@/store/github/github.api";
import { forwardRef, useImperativeHandle, Ref } from "react";
import RepoCard from "./RepoCard";

export interface ReposListRefType {
    fetchRepos: any;
}

export const ReposList = forwardRef(({ }, ref: Ref<ReposListRefType>) => {

    const [fetchRepos, { isLoading, data }] = useLazyGetUserReposQuery();

    useImperativeHandle(ref, () => ({ fetchRepos }));

    return (

        <div className="mt-5">
            {isLoading && <LoadingMessage text="Repos are loading" />}

            {data?.map((repo) => {
                return (
                    <RepoCard repo={repo} key={repo.id} />
                );
            })}
        </div>
    );
});