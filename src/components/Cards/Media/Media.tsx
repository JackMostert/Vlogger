import * as React from "react";
import ProfileThumbnail from "../../ProfileThumbnail/ProfileThumbnail";
import BasicStats from "../../Stats/BasicStats";
import { ReactComponent as LiveIcon } from "../../../Media/Live.svg";

export interface IMediaProps {}

class Media extends React.Component<IMediaProps> {
  public render() {
    return (
      <div className="media">
        <div className="media__header-container">
          <div className="media__left-content">
            <ProfileThumbnail
              url={`https://randomuser.me/api/portraits/women/${Math.floor(
                Math.random() * 80
              )}.jpg`}
              name="Jane Doe"
            />
            <BasicStats icon="las la-eye" title="43.0K" />
          </div>
          <div className="media__right-content">
            <BasicStats
              icon="las la-feather-alt"
              onRenderIcon={() => <LiveIcon className="live-icon" />}
              title="2 hours ago"
            />
          </div>
        </div>
        <img
          className="media__bg-img"
          src={`https://picsum.photos/640/480?${Math.random()}`}
          alt=""
        />
      </div>
    );
  }
}

export default Media;
