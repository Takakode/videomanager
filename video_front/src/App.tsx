import React, { ReducerWithoutAction, useReducer } from "react";
import { ChakraProvider } from '@chakra-ui/react'
import Menu from "./menu/Menu";
import { FavoritesContext, FavoritesDispatchContext, State, ActionFavorite } from "./FavoriteContext";
import { Video } from "./video/Video";

const initialFavorites = [
];
    
const favoritesReducer: React.Reducer<State, ActionFavorite> = (state, action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];;
        case 'delete':
            return state.filter(f => f.id !== action.payload.id);
        default:
            return state;
    }
};

export function App() {
    const [favorites, dispatch] = useReducer(
        favoritesReducer,
        initialFavorites
      );
    
    function handleAddFavorite(video) {
        dispatch({
            type: 'add',
            payload: video,
        });
    }

    function handleDeleteTask(video) {
        dispatch({
            type: 'delete',
            payload: video
        });
    }
    

    return (
        <ChakraProvider>
            <FavoritesContext.Provider value={favorites}>
                <FavoritesDispatchContext.Provider value={dispatch}>
                    <Menu favorites={favorites}
                    onAddFavorite={handleAddFavorite}
                    onDeleteFavorite={handleDeleteTask}
                    />
                </FavoritesDispatchContext.Provider>
            </FavoritesContext.Provider>
        </ChakraProvider>
        
    );
}
