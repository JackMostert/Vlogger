import * as React from "react";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import { ReactComponent as Chat } from "./icons8_chat.svg";
import { observable, runInAction } from "mobx";
import { observer } from "mobx-react";

interface IVideoProps {
  src?: any;
  onStop: () => void;
  videoRef?: any;
  onStart: () => void;
}

@observer
class Video extends React.Component<IVideoProps> {
  @observable
  private started: boolean = false;

  render() {
    return (
      <section className="video">
        <div className="video__aspect-ratio">
          <div className="video__video-container">
            {this.props.src && (
              <video
                autoPlay={true}
                className="video__video"
                id="stream_video"
                ref={this.props.videoRef}
              />
            )}
          </div>
        </div>
        <div className="video__icon-control">
          <div>
            {!this.started && (
              <Icon
                iconName="las la-play"
                iconSize={35}
                onClick={() => {
                  runInAction(() => {
                    this.started = true;
                  });
                  this.props.onStart();
                }}
                textProps={{
                  type: "p",
                  text: "Start Stream",
                  style: { color: "#a5b5c4" },
                }}
              />
            )}
            {this.started && (
              <Icon
                iconName="las la-stop"
                iconSize={35}
                onClick={() => {
                  runInAction(() => {
                    this.started = false;
                  });
                  this.props.onStop();
                }}
                textProps={{
                  type: "p",
                  text: "Start Stream",
                  style: { color: "#a5b5c4" },
                }}
              />
            )}
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
  }
}

export default Video;
