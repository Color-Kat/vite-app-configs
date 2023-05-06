import Page from '@/components/PageTemplates/Page';
import { useAppSelector } from '@/hooks/useAppSelector';
import react from 'react';
import { useSelector } from 'react-redux';

export const FavouritesPage = () => {
    const {favourites} = useAppSelector(state => state.github);



    return (
        <Page
            title="Your favourite repos"
        >
            {favourites.length == 0 && <p className="text-center">No favourites items</p>}

            {favourites.map(fav => {
                return (
                    <li key={fav}>
                        <a href={fav} target="_blank">{fav}</a>
                    </li>
                );
            })}
        </Page>
    );
}