import React from "react";
import ReactPlayer from "react-player";
import "./YouTube.scss";

type YouTubeProps = {};

const YouTube: React.FC<YouTubeProps> = (props: YouTubeProps) => {
  return (
    <div className="you-tube">
      <h2 className="you-tube__heading">Videos</h2>
      {/* TODO: Prevent video from trimmed. */}
      <div className="you-tube__body">
        <div className="you-tube__item">
          <ReactPlayer url="https://www.youtube.com/watch?v=CBX4BKUtK1c" />
        </div>
        <div className="you-tube__item">
          <ReactPlayer url="https://www.youtube.com/watch?v=PxdgfRnRduE" />
        </div>
        <div className="you-tube__item">
          <ReactPlayer url="https://www.youtube.com/watch?v=l45AStM1q3w" />
        </div>
        <div className="you-tube__item">
          <ReactPlayer url="https://www.youtube.com/watch?v=GPo8DXjx9R0" />
        </div>
      </div>
    </div>
  );
};

export default YouTube;
