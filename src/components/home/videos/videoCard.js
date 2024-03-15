// components/VideoCard.js

import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 100%;
  max-width: 350px;
  max-height:300px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 20px;
`;

const Thumbnail = styled.video`
  width: 100%;
  height: auto;
`;

const Content = styled.div`
`;

const Title = styled.h3`
  font-size: 18px;
  color:#000000;
`;

const Duration = styled.span`
  font-size: 14px;
  color: #666666;
`;

const VideoCard = ({ videoUrl, title="hamza the great", duration }) => {
  return (
    <CardContainer>
      <Thumbnail autoPlay loop muted playsInline>
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
      </Thumbnail>
      <Content>
        <Title>hamza the great</Title>
        <Duration>{duration}</Duration>
      </Content>
    </CardContainer>
  );
};

export default VideoCard;
