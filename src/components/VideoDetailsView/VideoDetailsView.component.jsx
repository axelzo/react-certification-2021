import React from 'react';
import styled from 'styled-components';

import { useFetchVideos } from '../../utils/hooks/useFetchVideos';

const VideoDetailsViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 173px;
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
`;

const Card = styled.div`
  padding: 2px 16px;
  display: flex;
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
  width: 100%;
  padding-top: 56.25%;
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

const VideoDetailsView = ({ dataItem, search }) => {
  const { data } = useFetchVideos(search);

  return (
    <>
      <VideoDetailsViewContainer>
        <VideoDetailsContainer onClick={() => console.log('click')}>
          <IframeContainer>
            <Iframe
              src={`https://www.youtube.com/embed/${dataItem.id.videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </IframeContainer>
          <h4 style={{ padding: '10px' }}>
            <b>{dataItem.snippet.title}</b>
          </h4>
          <Description style={{ padding: '10px' }}>
            {dataItem.snippet.description}
          </Description>
        </VideoDetailsContainer>
        <VideoListContainer>
          {!data ? (
            <div>Loading...</div>
          ) : (
            data.items.map((item, idx) => (
              // eslint-disable-next-line react/no-array-index-key
              <Card key={idx}>
                <Img src={item.snippet.thumbnails.default.url} alt="Thumbnail" />
                <p>{item.snippet.title}</p>
              </Card>
            ))
          )}
        </VideoListContainer>
      </VideoDetailsViewContainer>
    </>
  );
};

export default VideoDetailsView;
