import * as React from "react";
import { IImageProps } from "../Image/Image";
import ProfileThumbnail from "../../ProfileThumbnail/ProfileThumbnail";
import Icon from "../../Icon/Icon";
import ImageCard from "../Image/Image";
import moment from "moment";
import Text from "../../Text/Text";

interface IMediaProps {
  imageProps?: IImageProps;
}

const Media: React.FunctionComponent<IMediaProps> = (props) => {
  return (
    <div className="media-card">
      <ImageCard
        imgURL="https://picsum.photos/640/300"
        contentLeft={
          <ProfileThumbnail
            name="Jane Doe"
            // imageURL="https://randomuser.me/api/portraits/women/17.jpg"
          />
        }
        contentRight={
          <Icon
            iconName="las la-feather-alt"
            inline
            iconSize={22}
            textProps={{
              type: "p",
              text: moment().startOf("day").fromNow(),
            }}
          />
        }
      />
      <div className="media-card__content">
        <Text
          className="media-card__header"
          type="h6"
          text="Lorem ipsum dolor"
        />
        <Text
          className="media-card__discription"
          type="p"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, maiores
        rerum et eveniet deserunt accusamus asperiores! Repellat incidunt
        quaerat asperiores quam unde reprehenderit excepturi dolore voluptatum,
        officia enim odio ratione!"
        />
        <div className="media-card__stats">
          <Text
            className="media-card__hashtag"
            type="p"
            text="#hashtag"
            style={{ fontSize: "0.8rem" }}
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
      </div>
    </div>
  );
};

export default Media;
