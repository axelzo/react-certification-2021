import React, { useEffect, useState } from 'react';
import styled from 'styled-components'

import VideoCard from '../VideoCard';

const CardListContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
    padding:70px;
`


const VideoList = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        async function fetchApi() {
            const response = await fetch('https://gist.githubusercontent.com/jparciga/1d4dd34fb06ba74237f8966e2e777ff5/raw/f3af25f1505deb67e2cc9ee625a633f24d8983ff/youtube-videos-mock.json');
            const responseData = await response.json();
            setData(responseData)
          }
          
          fetchApi();
    }, []);

    return (
        <CardListContainer>
            {
            !data 
            ? <div >Loading...</div>
            : data.items.map((item) => (
                <VideoCard 
                    description={item.snippet.description} 
                    title={item.snippet.title} 
                    image={item.snippet.thumbnails.medium.url} 
                />))
            }
        </CardListContainer>
    )      
}

export default VideoList;
