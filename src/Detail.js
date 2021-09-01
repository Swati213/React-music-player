import React from "react";

const Detail = (props) => {
  return (
    <div className="detail">
      <div className="detail_img">
        <img src={props.song.img_src} alt="" />
      </div>
      <div className="detail_title">
        <h3>{props.song.title}</h3>
      </div>
      <div className="detail_artist">
        <h4>{props.song.artist}</h4>
      </div>

    </div>
  );
};

export default Detail;
