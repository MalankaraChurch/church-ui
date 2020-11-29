import React from 'react';
import ReactPlayer from "react-player";
import './YouTube.scss';

type YouTubeProps = {
};

const YouTube: React.FC<YouTubeProps> = (props: YouTubeProps) => {
  return (
    <div>
      <ReactPlayer url="https://www.youtube.com/watch?v=CBX4BKUtK1c" />
      <ReactPlayer url="https://www.youtube.com/watch?v=PxdgfRnRduE" />
      <ReactPlayer url="https://www.youtube.com/watch?v=l45AStM1q3w" />
      <ReactPlayer url="https://www.youtube.com/watch?v=GPo8DXjx9R0" />
    </div>
  );
};

export default YouTube;