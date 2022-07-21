/* eslint-disable no-nested-ternary */
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import VideoCard from '../VideoCard';
import VideoDetailsView from '../VideoDetailsView';

import { useFetchVideos } from '../../utils/hooks/useFetchVideos';
import { StateContext } from '../../context/State/state';

const CardListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 70px 70px 70px;
`;

const VideoList = () => {
  const stateContext = useContext(StateContext);
  const {
    video: { search },
    handleVideosList,
    handleSelectVideo,
  } = stateContext;
  const [openedDetails, setOpenedDetails] = useState(false);
  const { data } = useFetchVideos(search);

  const handleOpenDetails = (item) => {
    setOpenedDetails(!openedDetails);
    handleSelectVideo(item);
  };

  useEffect(() => {
    handleVideosList(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    handleVideosList(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return openedDetails ? (
    <VideoDetailsView />
  ) : (
    <>
      <h1>Welcome to the Challenge!</h1>
      <CardListContainer>
        {data ? (
          data.error ? (
            <div>Error Fetching data...</div>
          ) : (
            data.items.map((item, idx) => (
              <VideoCard
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
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
