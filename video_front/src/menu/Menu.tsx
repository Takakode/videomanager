import React from "react";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { VideoList } from "../video-list/VideoList";

export default function Menu({favorites, onAddFavorite, onDeleteFavorite}) {
    return (
        <Tabs>
            <TabList>
                <Tab>Video List</Tab>
                <Tab>Favorites Video</Tab>
                <Tab>User Account</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                <VideoList 
                        favorites={favorites}
                        onAddFavorite={onAddFavorite}
                        onDeleteFavorite={onDeleteFavorite}
                />
                </TabPanel>
                <TabPanel>
                <VideoList 
                    favorites={favorites}
                    onAddFavorite={onAddFavorite}
                    onDeleteFavorite={onDeleteFavorite}
                    isFavoriteList={true}
                />
                </TabPanel>
                <TabPanel>
                <p>three!</p>
                </TabPanel>
            </TabPanels>
            </Tabs>   
    );
}