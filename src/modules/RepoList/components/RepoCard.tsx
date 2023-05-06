import { useActions } from "@/hooks/useActions";
import { useAppSelector } from "@/hooks/useAppSelector";
import { IRepo } from "@/types/gihubApiTypes";
import React, { useState } from "react";

const RepoCard: React.FC<{ repo: IRepo }> = ({ repo }) => {

    const { addFavourite, removeFavourite } = useActions();

    const { favourites } = useAppSelector(state => state.github);
    const [isfavourite, setIsFavourite] = useState(favourites.includes(repo.html_url));

    const addToFavourites = () => {
        addFavourite(repo.html_url);
        setIsFavourite(true);
    }

    const removeFromFavourites = () => {
        removeFavourite(repo.html_url);
        setIsFavourite(false);
    }

    return (
        <div
            className="border border-gray-700 px-2 py-2 rounded-md mb-2 hover:shadow-md hover:bg-gray-700 transition-all w-[540px]"
        >
            <h2 className="text-lg font-bold font-play cursor-pointer">
                <a href={repo.html_url} target="_blank">
                    {repo.full_name}
                </a>
            </h2>

            <div className="text-sm flex flex-col space-y-1">
                <div>Forks: <span className="font-bold">{repo.forks_count}</span></div>
                <div>Watchers: <span className="font-bold">{repo.watchers_count}</span></div>
            </div>

            <p className="text-sm font-thin">
                {repo?.description}
            </p>

            <div className="flex space-x-2">
                {isfavourite
                    ? <button
                        className="bg-red-500 hover:bg-red-600 shadow-sm rounded-md px-1.5 py-1 text-sm my-1.5 text-gray-100"
                        onClick={removeFromFavourites}
                    >Удалить из избранного</button>
                    : <button
                        className="bg-yellow-500 hover:bg-yellow-600 shadow-sm rounded-md px-1.5 py-1 text-sm my-1.5 text-gray-900"
                        onClick={addToFavourites}
                    >В избранное</button>
                }
            </div>
        </div>
    );
}

export default RepoCard;