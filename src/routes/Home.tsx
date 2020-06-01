import * as React from "react";
import HashTag from "../components/Cards/HashTag/HashTag";
import ScrollableDiv from "../components/ScrollableDiv/ScrollableDiv";
import Text from "../components/Text/Text";
import History from "../components/Cards/History/History";
import ImageCard from "../components/Cards/Image/Image";
import moment from "moment";
import ProfileThumbnail from "../components/ProfileThumbnail/ProfileThumbnail";
import Icon from "../components/Icon/Icon";
import rootStore from "../store/RootStore";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
// @ts-ignore
import io from "socket.io-client";

interface IHomeProps {
  route: any;
  history?: any;
}

@observer
class Home extends React.Component<IHomeProps> {
  @observable
  private items: any[] = [];

  @observable
  private users: any[] = [];

  private socket = io("http://localhost:4000");

  @action
  componentWillMount() {
    this.socket.on("FromAPI", (data: any) => {
      if (this.items.length !== data.length) {
        this.items = data;
      }
    });
    this.socket.on("users", (data: any) => {
      if (this.users.length !== data.length) {
        this.users = data;
      }
    });
  }

  render() {
    return (
      <section className="page page-home" style={{ paddingTop: 10 }}>
        <ScrollableDiv direction="hor">
          <HashTag
            hashtag="#happy feelings"
            url="https://picsum.photos/200/200"
            onClick={(hashtag: string) => {}}
          />
          <HashTag
            hashtag="#happy feelings"
            url="https://picsum.photos/200/200"
            onClick={(hashtag: string) => {}}
          />
          <HashTag
            hashtag="#happy feelings"
            url="https://picsum.photos/200/200"
            onClick={(hashtag: string) => {}}
          />
          <HashTag
            hashtag="#happy feelings"
            url="https://picsum.photos/200/200"
            onClick={(hashtag: string) => {}}
          />
          <HashTag
            hashtag="#happy feelings"
            url="https://picsum.photos/200/200"
            onClick={(hashtag: string) => {}}
          />
          <HashTag
            hashtag="#happy feelings"
            url="https://picsum.photos/200/200"
            onClick={(hashtag: string) => {}}
          />
          <HashTag
            hashtag="#happy feelings"
            url="https://picsum.photos/200/200"
            onClick={(hashtag: string) => {}}
          />
        </ScrollableDiv>
        <section className="page-home__discover">
          <div className="page-home__header">
            <Text type="h5" text="Discover" />
            <Text type="p" text="See All" />
          </div>
          {this.items.map((item: any) => {
            return (
              <>
                <ImageCard
                  onClick={() => {
                    rootStore.routingStore.history.push(
                      `/watchvideo/${item.replace(/\..*$/, "")}`
                    );
                  }}
                  imgURL={
                    "https://picsum.photos/640/300?" + item.replace(/\..*$/, "")
                  }
                  contentLeft={
                    <ProfileThumbnail
                      name="Jane Doe"
                      //   imageURL="https://randomuser.me/api/portraits/women/17.jpg"
                    />
                  }
                  contentRight={
                    <Icon
                      iconName="las la-feather-alt"
                      iconSize={22}
                      inline
                      textProps={{
                        type: "p",
                        text: moment().startOf("day").fromNow(),
                      }}
                    />
                  }
                />
                <br></br>
              </>
            );
          })}
          {this.users.map((item: any) => {
            return (
              <>
                <ImageCard
                  onClick={() => {
                    rootStore.routingStore.history.push(
                      `/watch:${item.replace(/\..*$/, "")}`
                    );
                  }}
                  imgURL={
                    "https://picsum.photos/640/300?" + item.replace(/\..*$/, "")
                  }
                  contentLeft={
                    <ProfileThumbnail
                      name="Jane Doe"
                      //   imageURL="https://randomuser.me/api/portraits/women/17.jpg"
                    />
                  }
                  contentRight={
                    <Icon
                      iconName="las la-feather-alt"
                      iconSize={22}
                      inline
                      textProps={{
                        type: "p",
                        text: moment().startOf("day").fromNow(),
                      }}
                    />
                  }
                />
                <br></br>
              </>
            );
          })}
        </section>
        <br></br>
        <section className="page-home__recent">
          <div className="page-home__header">
            <Text type="h5" text="Recent" />
            <Text type="p" text="See All" />
          </div>
          <History
            thumbnail="https://picsum.photos/640/300"
            title="Some video title"
            hashtags={["OnlyAllow30OrLessCharactercoun"]}
          />
          <History
            thumbnail="https://picsum.photos/640/300"
            title="Some video title"
            hashtags={["OnlyAllow30OrLessCharactercoun"]}
          />
          <History
            thumbnail="https://picsum.photos/640/300"
            title="Some video title"
            hashtags={["OnlyAllow30OrLessCharactercoun"]}
          />
          <History
            thumbnail="https://picsum.photos/640/300"
            title="Some video title"
            hashtags={["OnlyAllow30OrLessCharactercoun"]}
          />
          <History
            thumbnail="https://picsum.photos/640/300"
            title="Some video title"
            hashtags={["OnlyAllow30OrLessCharactercoun"]}
          />
        </section>
      </section>
    );
  }
}

export default Home;
