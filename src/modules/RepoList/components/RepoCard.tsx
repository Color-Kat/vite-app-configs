import { IRepo } from "@/types/gihubApiTypes";
import React from "react";

const RepoCard: React.FC<{ repo: IRepo }> = ({ repo }) => {
    return (
        <div
            className="border border-gray-700 px-2 py-2 rounded-md mb-2 hover:shadow-md hover:bg-gray-700 transition-all w-[540px] cursor-pointer"
        >
            <a href={repo.html_url} target="_blank">
                <h2 className="text-lg font-bold font-play">{repo.full_name}</h2>

                <p className="text-sm flex flex-col space-y-1">
                    <div>Forks: <span className="font-bold">{repo.forks_count}</span></div>
                    <div>Watchers: <span className="font-bold">{repo.watchers_count}</span></div>
                </p>

                <p className="text-sm font-thin">
                    {repo?.description}
                </p>
            </a>
        </div>
    );
}

export default RepoCard;