import * as React from "react";
import HashTag from "../components/Cards/HashTag/HashTag";
import ScrollableDiv from "../components/ScrollableDiv/ScrollableDiv";
import Text from "../components/Text/Text";
import History from "../components/Cards/History/History";
import ImageCard from "../components/Cards/Image/Image";
import moment from "moment";
import ProfileThumbnail from "../components/ProfileThumbnail/ProfileThumbnail";
import Icon from "../components/Icon/Icon";

interface IHomeProps {
  route: any;
  history?: any;
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
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
        <ImageCard
          imgURL="https://picsum.photos/640/300"
          contentLeft={
            <ProfileThumbnail
              name="Jane Doe"
              url="https://randomuser.me/api/portraits/women/17.jpg"
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
        <ImageCard
          imgURL="https://picsum.photos/640/300"
          contentLeft={
            <ProfileThumbnail
              name="Jane Doe"
              url="https://randomuser.me/api/portraits/women/17.jpg"
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
        <br></br>
        <ImageCard
          imgURL="https://picsum.photos/640/300"
          contentLeft={
            <ProfileThumbnail
              name="Jane Doe"
              url="https://randomuser.me/api/portraits/women/17.jpg"
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
        <br></br>
        <ImageCard
          imgURL="https://picsum.photos/640/300"
          contentLeft={
            <ProfileThumbnail
              name="Jane Doe"
              url="https://randomuser.me/api/portraits/women/17.jpg"
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
};

export default Home;
