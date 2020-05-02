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
        <section className="page-body">
          <HashTag />
          <HashTag />
          <HashTag />
          <HashTag />
        </section>
      </section>
    );
  }
}

export default App;
