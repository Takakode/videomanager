import React, { useContext, useState } from "react";
import axios from "axios";
import { Video } from "../video/Video";
import { ApiUrlContext } from "../ConfContext";
import { list } from "@chakra-ui/react";

export function VideoList({favorites, onAddFavorite, onDeleteFavorite, isFavoriteList=false}) {
    const apiUrlContext = useContext(ApiUrlContext);
    const [listVideo, setListVideo] = useState('');

    function getAllVideo() {
        if(isFavoriteList) {
            axios.get(apiUrlContext + 'video')
            .then(res => {
                const listVideo = res.data.map(video => 
                    <Video 
                        key={video.id} 
                        video={video} 
                        isFavoriteList={isFavoriteList}
                        onAddFavorite={onAddFavorite}
                        onDeleteFavorite={onDeleteFavorite}
                    />
                );
                setListVideo(listVideo);
            })
        } else {
            axios.get(apiUrlContext + 'video')
            .then(res => {
                const listVideo = res.data.map(video => 
                    <Video 
                        key={video.id} 
                        video={video} 
                        isFavoriteList={isFavoriteList}
                        onAddFavorite={onAddFavorite}
                        onDeleteFavorite={onDeleteFavorite}
                    />
                );
                setListVideo(listVideo);
            })
        }
    }

    getAllVideo();
    return (
          <div>{listVideo}</div>  
    );
}