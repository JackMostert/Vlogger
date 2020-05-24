import * as React from "react";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import { ReactComponent as Chat } from "./icons8_chat.svg";

interface IVideoProps {
  src: any;
}

const Video: React.FunctionComponent<IVideoProps> = (props) => {
  return (
    <section className="video">
      <div className="video__aspect-ratio">
        <div className="video__video-container">
          <img
            className="video__video"
            src="https://images.unsplash.com/photo-1582567056798-7dc94989e56d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="video__icon-control">
        <div>
          <Icon
            iconName="las la-heart"
            iconSize={35}
            textProps={{
              type: "p",
              text: "Love This",
              style: { color: "#a5b5c4" },
            }}
          />
        </div>
        <div>
          <button
            style={{
              display: "flex",
              flexFlow: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Chat
              className="video__svg"
              style={{
                width: 38,
                height: 38,
              }}
            />
            <Text type="p" text="Live Chat" style={{ color: "#a5b5c4" }} />
          </button>
        </div>
        <div>
          <Icon
            iconName="las la-feather-alt"
            iconSize={35}
            textProps={{
              type: "p",
              text: "Share",
              style: { color: "#a5b5c4" },
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Video;
