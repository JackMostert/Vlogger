import * as React from "react";
import Text from "../Text/Text";

interface IProfileThumbnailProps {
  name: string;
  imageURL?: string;
  subText?: string | React.ReactElement;
  imageSize?: number;
}

const ProfileThumbnail: React.FunctionComponent<IProfileThumbnailProps> = (
  props
) => {
  const profileUrl =
    props.imageURL || "https://eu.ui-avatars.com/api/?name=" + props.name;

  const { imageSize, subText } = props;

  return (
    <div className="profilethumbnail">
      <img
        className="profilethumbnail__img"
        src={profileUrl}
        alt=""
        width={imageSize}
        height={imageSize}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Text type="p" className="profilethumbnail__text" text={props.name} />
        {typeof subText === "string" ? (
          <Text type="p" className="profilethumbnail__text" text={subText} style={{color: "#a4a6aa"}} />
        ) : (
          subText
        )}
      </div>
    </div>
  );
};

ProfileThumbnail.defaultProps = {
  imageSize: 23,
};

export default ProfileThumbnail;
