import React from "react";
import { inject, observer } from "mobx-react";
import { IrootStore } from "./store/RootStore";
import RootHeader from "./components/RootHeader/RootHeader";
import HashTag from "./components/Cards/HashTag/HashTag";
import ScrollableDiv from "./components/ScrollableDiv/ScrollableDiv";
import Media from "./components/Cards/Media/Media";
import Text from "./components/Text/Text";
import History from "./components/Cards/History/History";

@inject("rootStore")
@observer
class App extends React.Component<{ rootStore?: IrootStore }> {
  render() {
    return (
      <section className="root">
        <RootHeader />
        <section className="page-home" style={{ paddingTop: 10 }}>
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
            <Media />
            <Media />
            <Media />
            <Media />
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
      </section>
    );
  }
}

export default App;
