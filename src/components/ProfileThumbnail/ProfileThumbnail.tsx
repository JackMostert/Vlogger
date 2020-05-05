import * as React from "react";
import Text from "../Text/Text";

interface IProfileThumbnailProps {
  url: string;
  name: string;
}

const ProfileThumbnail: React.FunctionComponent<IProfileThumbnailProps> = (
  props
) => {
  return (
    <div className="profilethumbnail">
      <img className="profilethumbnail__img" src={props.url} alt="" />
      <Text type="p" className="profilethumbnail__text" text={props.name} />
    </div>
  );
};

export default ProfileThumbnail;
