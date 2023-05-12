import { Dispatch, createContext } from 'react';

export type State = Video[];
export type Video = {
    id: number;
    title: string;
    description: string;
}
export type ActionFavorite = 
    | { type: 'add', payload: Video}
    | { type: 'delete', payload: Video};
    
export const FavoritesContext = createContext<State | null>(null);
export const FavoritesDispatchContext = createContext<Dispatch<ActionFavorite> | null>(null);