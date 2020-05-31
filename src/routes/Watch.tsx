import * as React from "react";
import { observable, action, runInAction } from "mobx";
import Peer from "peerjs";
import { observer } from "mobx-react";
import Video from "../components/Video/Video";
import MessagingChat from "@bit/j_mostert.react-components.messaging-chat";
import { PrimaryButton, TextField } from "@fluentui/react";

interface IWatchProps {
  route: any;
}
@observer
class Watch extends React.Component<any> {
  private onPeerOpen = (id: string) => {
    console.log(`Connected to server with id: ${id}`);
  };

  private onHostConnect = () => {
    console.log(`Connected to host: ${this.conn.peer}`);
    this.conn.on("data", this.onPeerData);
  };

  private onPeerData = (data: any) => {
    this.chat.push(data);
    this.forceUpdate();
  };

  @action
  private onPeerSendMsg = () => {
    if (this.conn && this.message) {
      let payload = {
        user: {
          name: "Jane Doe",
          url: "https://randomuser.me/api/portraits/men/41.jpg",
        },
        timestamp: Date.now(),
        message: this.message,
      };
      this.conn.send(payload);
    }
  };

  @observable
  private message: string = "";

  private conn: any;

  private videoRef: any = React.createRef<any>();

  private peer: any;

  @observable
  private chat: Array<any> = [];

  private stream: any;

  private connect = () => {
    this.peer = new Peer("111", {
      host: "192.168.0.5",
      port: 4000,
      path: "/peerjs/myapp",
    });

    this.peer.on("call", (call: any) => {
      call.answer(undefined);
      call.on("stream", (remoteStream: any) => {
        const video: any = document.querySelector("#stream_video");
        video.srcObject = remoteStream;
        console.log(remoteStream);
      });
    });

    this.peer.on("open", this.onPeerOpen);
    this.conn = this.peer.connect(this.props.route.match.params.videoID, {
      reliable: true,
    });
    this.conn.on("open", this.onHostConnect);
  };

  private stop = () => {
    this.peer = null;
    this.conn = [];
    this.chat = [];
  };

  render() {
    return (
      <section className="page page-watch page-stream">
        <div className="video-holder">
          <Video
            src="https://www.youtube.com/embed/aZnEv7bu7b8"
            videoRef={this.videoRef}
            onStart={this.connect}
            onStop={this.stop}
          />
          <MessagingChat messages={this.chat} theme="dark" />
          <TextField
            placeholder="Type..."
            onChange={(e, value) => {
              runInAction(() => {
                this.message = value || "";
              });
            }}
          />
          <PrimaryButton
            text="Primary"
            onClick={() => {
              this.onPeerSendMsg();
            }}
          />
        </div>
      </section>
    );
  }
}

export default Watch;
