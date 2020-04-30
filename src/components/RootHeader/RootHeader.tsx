import React from "react";
import { inject, observer } from "mobx-react";
import rootStore from "../../store/RootStore";

@inject("rootStore")
@observer
class RootHeader extends React.Component<{}> {
  private onNavStateChange = (state: "open" | "close") => {
    rootStore.uiStore.set("rootNavigationOpenState", state);
  };
  public render() {
    const navOpenState = rootStore.uiStore.rootNavigationOpenState;
    return (
      <>
        <div className={`root-nav root-nav--${navOpenState}`}>
          <nav className="root-nav__nav"></nav>
          <div
            className="root-nav__shadow"
            onClick={() => this.onNavStateChange("close")}
          ></div>
        </div>

        <header className="page-header">
          <div className="page-header__left-container">
            <button onClick={() => this.onNavStateChange("open")}>
              <i className="lab la-gitter"></i>
            </button>
            <p>{rootStore?.routeStore.current}</p>
          </div>
          <div className="page-header__right-container">
            <button>
              <i className="las la-search"></i>
            </button>
          </div>
        </header>
      </>
    );
  }
}

export default RootHeader;
