/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import VideoCard from '../VideoCard';
import VideoDetailsView from '../VideoDetailsView';
import { useFetchVideos } from '../../utils/hooks/useFetchVideos';

const CardListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 70px;
`;

const VideoList = ({ search }) => {
  const [openedDetails, setOpenedDetails] = useState(false);
  const [selectedVideoDetails, setSelectedVideoDetails] = useState(false);
  const { data } = useFetchVideos(search);
  const handleOpenDetails = (item) => {
    setOpenedDetails(!openedDetails);
    setSelectedVideoDetails(item);
  };

  useEffect(() => {
    console.log('DATA');
  }, [search]);

  return openedDetails ? (
    <VideoDetailsView dataItem={selectedVideoDetails} search={search} />
  ) : (
    <>
      <h1>Welcome to the Challenge!</h1>
      <CardListContainer>
        {data ? (
          data.error ? (
            <div>Error Fetching data...</div>
          ) : (
            data.items.map((item) => (
              <VideoCard
                description={item.snippet.description}
                title={item.snippet.title}
                image={item.snippet.thumbnails.medium.url}
                handleOpenDetails={handleOpenDetails}
                item={item}
              />
            ))
          )
        ) : (
          <div>Loading...</div>
        )}
      </CardListContainer>
    </>
  );
};

export default VideoList;
