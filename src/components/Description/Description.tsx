import * as React from "react";
import ProfileThumbnail from "../ProfileThumbnail/ProfileThumbnail";
import Icon from "../Icon/Icon";

interface IDescriptionProps {}

const Description: React.FunctionComponent<IDescriptionProps> = (props) => {
  return (
    <section className="description">
      <div className="description__header">
        <ProfileThumbnail
          name="Jane Doe"
          imageSize={50}
          subText="Some Text"
          //   imageURL="https://randomuser.me/api/portraits/women/17.jpg"
        />
        <Icon
          iconName="las la-eye media-card__hashtag"
          iconSize={16}
          inline
          textProps={{
            type: "p",
            text: "24.5K Views",
            style: { fontSize: "0.8rem", color: "#a4a6aa" },
          }}
        />
      </div>
    </section>
  );
};

export default Description;
