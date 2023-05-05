import LoadingMessage from "@/UI/Loaders/LoadingMessage";
import { useLazyGetUserReposQuery } from "@/store/github/github.api";
import { IRepo } from "@/types/gihubApiTypes";
import { FunctionComponent, forwardRef, useImperativeHandle, Ref } from "react";

export interface ReposListRefType {
    fetchRepos: any;
}

const ReposList = ({ }, ref: Ref<ReposListRefType>) => {

    const [fetchRepos, { isLoading, data }] = useLazyGetUserReposQuery();

    useImperativeHandle(ref, () => ({ fetchRepos }));

    console.log(data);


    return (

        <div className="">
            {isLoading && <LoadingMessage text="Repos are loading" />}

            {data?.map((repo) => {
                return (
                    <p>{repo.url}</p>
                );
            })}
        </div>
    );
}

export default forwardRef(ReposList);