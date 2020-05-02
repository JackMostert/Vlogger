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
    const navClassName = `rootheader__nav-container rootheader__nav-container--${navOpenState}`;

    return (
      <aside className="rootheader">
        <section className={navClassName}>
          <nav className="rootheader__links-holder"></nav>
          <div
            className="rootheader__nav-shadow"
            onClick={() => this.onNavStateChange("close")}
          />
        </section>
        <section className="rootheader__display-content">
          <div className="rootheader__content">
            <button
              className="rootheader__button"
              onClick={() => this.onNavStateChange("open")}
              children={<i className="lab la-gitter rootheader__icon"></i>}
            />
            <span
              className="rootheader__text"
              children={rootStore?.routeStore.current}
            />
          </div>
          <div className="rootheader__content">
            <button
              className="rootheader__button"
              onClick={() => this.onNavStateChange("open")}
              children={<i className="las la-search rootheader__icon"></i>}
            />
          </div>
        </section>
      </aside>
    );
  }
}

export default RootHeader;
