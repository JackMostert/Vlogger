import * as React from "react";

export interface IImageProps {
  imgURL: string;
  contentLeft?: React.ReactElement;
  contentRight?: React.ReactElement;
}

const Image: React.FunctionComponent<IImageProps> = (props) => {
  return (
    <button className="image-card">
      <img className="image-card__img" src={props.imgURL} alt="" />
      <div className="image-card__content-holder">
        <div className="image-card__content-left">{props.contentLeft}</div>
        <div className="image-card__content-right">{props.contentRight}</div>
      </div>
    </button>
  );
};

export default Image;
