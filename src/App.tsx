import React from "react";
import { inject, observer } from "mobx-react";
import { IrootStore } from "./store/RootStore";
import RootHeader from "./components/RootHeader/RootHeader";
import HashTag from "./components/Cards/HashTag/HashTag";
import ScrollableDiv from "./components/ScrollableDiv/ScrollableDiv";
import Media from "./components/Cards/Media/Media";

@inject("rootStore")
@observer
class App extends React.Component<{ rootStore?: IrootStore }> {
  render() {
    return (
      <section className="root">
        <RootHeader />
        <section className="page">
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
          <section className="page__discover">
            <h5>Discover</h5>
            <br></br>
            <Media />
            <Media />
            <Media />
            <Media />
          </section>
          <section className="page__recent"></section>
        </section>
      </section>
    );
  }
}

export default App;
