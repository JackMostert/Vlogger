import React from "react";
import { inject, observer } from "mobx-react";
import { IrootStore } from "./store/RootStore";
import RootHeader from "./components/RootHeader/RootHeader";
import HashTag from "./components/Cards/HashTag/HashTag";

@inject("rootStore")
@observer
class App extends React.Component<{ rootStore?: IrootStore }> {
  render() {
    return (
      <section className="root">
        <RootHeader />
        <section className="page">
          <div className="scrollable-hor">
            <HashTag
              hashtag="#happy feelings"
              url="https://picsum.photos/200/200"
            />
            <HashTag
              hashtag="#happy feelings"
              url="https://picsum.photos/200/200"
            />
            <HashTag
              hashtag="#happy feelings"
              url="https://picsum.photos/200/200"
            />
            <HashTag
              hashtag="#happy feelings"
              url="https://picsum.photos/200/200"
            />
            <HashTag
              hashtag="#happy feelings"
              url="https://picsum.photos/200/200"
            />
            <HashTag
              hashtag="#happy feelings"
              url="https://picsum.photos/200/200"
            />
            <HashTag
              hashtag="#happy feelings"
              url="https://picsum.photos/200/200"
            />
          </div>
          <section className="page__discover"></section>
          <section className="page__recent"></section>
        </section>
      </section>
    );
  }
}

export default App;
