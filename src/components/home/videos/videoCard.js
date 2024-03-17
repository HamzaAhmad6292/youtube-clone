import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

const CardContainer = styled.div`
  width: 100%;
  max-width: 350px;
  height: 270px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 12px rgba(0, 0, 0, 0.2);
    border-radius: 14px;  
  }
`;

const Thumbnail = styled.div`
  flex: 1;
  overflow: hidden;
  border-radius: 12px;
  border-radius: 12px 12px 0 0;
  box-shadow: 0 12px 12px rgba(0, 0, 0, 0.2);

`;

const Image = styled.img`
  width: 100%;
  border-radius: 14px;  
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  background-color: transparent;
  padding: 10px;
  border-radius: 0 0 12px 12px;
`;

const Title = styled.h3`
  font-size: 18px;
  color: #ffffff;
  margin-bottom: 5px;
`;

const Duration = styled.span`
  font-size: 14px;
  color: #ffffff;
`;

const VideoCard = ({ video }) => {
  const router = useRouter();

  const handleVideoClick = () => {
    router.push(`/video/${video?._id}`);
  };

  return (
    <div onClick={handleVideoClick}>
      <CardContainer>
        <Thumbnail>
          <Image src={video?.thumbnailUrl} alt="Thumbnail" />
        </Thumbnail>
        <Content>
          <Title>{video?.title}</Title>
          <Duration>{video?.videoLength} m</Duration>
        </Content>
      </CardContainer>
    </div>
  );
};

export default VideoCard;
