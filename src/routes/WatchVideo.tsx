import * as React from "react";

interface IWatchVideoProps {
  route: any;
}

class WatchVideo extends React.Component<IWatchVideoProps> {
  render() {
    console.log(this.props);

    return (
      <section className="page page-watch page-stream">
        <div className="video-holder">
          <section className="video">
            <div className="video__aspect-ratio">
              <div className="video__video-container">
                <video
                  autoPlay={true}
                  className="video__video"
                  src={`http://192.168.0.5:4000/video/${this.props.route.match.params.id}`}
                />
              </div>
            </div>
          </section>
        </div>
      </section>
    );
  }
}

export default WatchVideo;
