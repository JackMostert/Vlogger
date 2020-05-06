import React from "react";
import { inject, observer } from "mobx-react";
import rootStore from "../../store/RootStore";
import Text from "../Text/Text";
import { Link } from "react-router-dom";
import ProfileThumbnail from "../ProfileThumbnail/ProfileThumbnail";

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
          <nav className="rootheader__links-holder">
            <div className="rootheader__nav-header">
              <ProfileThumbnail
                url={`https://randomuser.me/api/portraits/women/${Math.floor(
                  Math.random() * 80
                )}.jpg`}
                name=""
              />
              <div>
                <Text type="p" text="Diane Mckinney" />
                <Text type="p" text="diane.mckinney@example.com" />
              </div>
            </div>
            <li className="rootheader__link-container">
              <Link className="rootheader__link" to="/home" title="Home">
                <i className={`rootheader__icon las la-home`}></i>
                <Text className="rootheader__link-text" type="p" text="Home" />
                <i
                  className={`rootheader__icon-extra las la-chevron-right`}
                ></i>
              </Link>
            </li>
            <li className="rootheader__link-container">
              <Link
                className="rootheader__link"
                to="/discover"
                title="Discover"
              >
                <i className={`rootheader__icon las la-mountain`}></i>
                <Text
                  className="rootheader__link-text"
                  type="p"
                  text="Discover"
                />
                <i
                  className={`rootheader__icon-extra las la-chevron-right`}
                ></i>
              </Link>
            </li>
            <li className="rootheader__link-container">
              <Link className="rootheader__link" to="/explore" title="Explore">
                <i className={`rootheader__icon las la-binoculars`}></i>
                <Text
                  className="rootheader__link-text"
                  type="p"
                  text="Explore"
                />
                <i
                  className={`rootheader__icon-extra las la-chevron-right`}
                ></i>
              </Link>
            </li>
            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <li
                className="rootheader__link-container"
                style={{ background: "none" }}
              >
                <Link
                  className="rootheader__link"
                  to="/explore"
                  title="Explore"
                >
                  <i className={`rootheader__icon las la-sign-out-alt`}></i>
                  <Text
                    className="rootheader__link-text"
                    type="p"
                    text="Logout"
                  />
                </Link>
              </li>
            </div>
          </nav>
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
              children={
                <i className="lab la-gitter rootheader__icon rootheader__icon-left"></i>
              }
            />
            <Text
              text={rootStore?.routeStore.current}
              type="p"
              className="rootheader__text"
            />
          </div>
          <div className="rootheader__content">
            <button
              className="rootheader__button"
              onClick={() => this.onNavStateChange("open")}
              children={
                <i className="las la-search rootheader__icon rootheader__icon-right"></i>
              }
            />
          </div>
        </section>
      </aside>
    );
  }
}

export default RootHeader;
