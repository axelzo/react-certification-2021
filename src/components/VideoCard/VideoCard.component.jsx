import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  width: 25%;
  padding: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

const CardDiv = styled.div`
  width: 400px;
  height: 450px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  overflow: auto;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
const Card = styled.div`
  padding: 2px 16px;
  overflow: auto;
`;
const Description = styled.p`
  font-size: 15px;
  text-align: left;
`;

const VideoCard = ({ description, title, image, handleOpenDetails, item }) => {
  return (
    <CardContainer
      onClick={() => {
        handleOpenDetails(item);
      }}
    >
      <CardDiv>
        <img src={image} alt="Thumbnail" />
        <Card>
          <h4>
            <b>{title}</b>
          </h4>
          <Description>{description}</Description>
        </Card>
      </CardDiv>
    </CardContainer>
  );
};

export default VideoCard;
