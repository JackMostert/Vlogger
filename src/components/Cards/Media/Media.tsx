import * as React from "react";
import ProfileThumbnail from "../../ProfileThumbnail/ProfileThumbnail";
import BasicStats from "../../Stats/BasicStats";

export interface IMediaProps {}

class Media extends React.Component<IMediaProps> {
  public render() {
    return (
      <div className="media">
        <div className="media__header-container">
          <div className="media__left-content">
            <ProfileThumbnail
              url="https://thispersondoesnotexist.com/image"
              name="John Doe"
            />
            <BasicStats icon="las la-eye" title="43.0K" />
          </div>
          <div className="media__right-content">
            <BasicStats icon="las la-feather-alt" title="2 hours ago" />
          </div>
        </div>
        <img className="media__bg-img" src="" alt="" />
      </div>
    );
  }
}

export default Media;
