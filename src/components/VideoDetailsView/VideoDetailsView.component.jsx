import React, { useContext } from 'react';
import styled from 'styled-components';

import { StateContext } from '../../context/State/state';

const VideoDetailsViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 24px;
`;

const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
`;

const VideoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  height: 650px;
  overflow: scroll;
  background-color: ${(props) => (props.mode ? '#303030' : '#ffffff')};
  color: ${(props) => (props.mode ? '#ccc' : '#303030')};
`;

const Card = styled.div`
  padding: 2px 16px;
  display: flex;
  cursor: pointer;
`;

const Img = styled.img`
  width: 120px;
  height: 90px;
`;

const Description = styled.p`
  text-align: left;
`;

const IframeContainer = styled.div`
  position: relative;
  width: 60vw;
  padding-top: 56.25%;
  z-index: 1;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

const DetailDescription = styled.p`
  margin-top: 0;
  padding-left: 10px;
`;

const VideoDetailsView = () => {
  const stateContext = useContext(StateContext);
  const {
    darkMode,
    video: { videos, selectedVideo },
    handleSelectVideo,
  } = stateContext;

  return (
    <>
      <VideoDetailsViewContainer>
        <VideoDetailsContainer>
          <IframeContainer>
            <Iframe
              src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </IframeContainer>
          <h3>
            <b>{selectedVideo.snippet.title}</b>
          </h3>
          <Description style={{ padding: '10px' }}>
            {selectedVideo.snippet.description}
          </Description>
        </VideoDetailsContainer>
        <VideoListContainer mode={darkMode ? 1 : 0}>
          {!videos ? (
            <div>Loading...</div>
          ) : (
            videos.items.map((item, idx) => (
              // eslint-disable-next-line react/no-array-index-key
              <Card key={idx} onClick={() => handleSelectVideo(item)}>
                <Img src={item.snippet.thumbnails.default.url} alt="Thumbnail" />
                <DetailDescription>{item.snippet.title}</DetailDescription>
              </Card>
            ))
          )}
        </VideoListContainer>
      </VideoDetailsViewContainer>
    </>
  );
};

export default VideoDetailsView;
