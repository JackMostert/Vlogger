import * as React from "react";

interface IProfileThumbnailProps {
  url: string;
  name: string;
}

const ProfileThumbnail: React.FunctionComponent<IProfileThumbnailProps> = (
  props
) => {
  return (
    <div className="profilethumbnail">
      <img
        className="profilethumbnail__img"
        src={props.url + "?" + Math.random()}
        alt=""
      />
      <p className="profilethumbnail__text">{props.name}</p>
    </div>
  );
};

export default ProfileThumbnail;
