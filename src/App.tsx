import React from "react";
import { inject } from "mobx-react";
import { IrootStore } from "./store/RootStore";

@inject("rootStore")
class App extends React.Component<{ rootStore?: IrootStore }> {
  render() {
    return (
      <section className="root">
        <header className="page-header">
          <div className="page-header__left-container">
            <button>
              <i className="lab la-gitter"></i>
            </button>
            <p>{this.props.rootStore?.routeStore.current}</p>
          </div>
          <div className="page-header__right-container">
            <button>
              <i className="las la-search"></i>
            </button>
          </div>
        </header>
        <section className="page-body"></section>
      </section>
    );
  }
}

export default App;
