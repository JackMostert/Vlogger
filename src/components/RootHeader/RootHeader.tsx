import React from "react";
import { inject, observer } from "mobx-react";
import rootStore from "../../store/RootStore";
import Text from "../Text/Text";
import { Link } from "react-router-dom";
import ProfileThumbnail from "../ProfileThumbnail/ProfileThumbnail";
import _ from "lodash";
import { IRoutes } from "../../store/RouteStore";

@inject("rootStore")
@observer
class RootHeader extends React.Component<any> {
  private onNavStateChange = (state: "open" | "close") => {
    rootStore.uiStore.set("rootNavigationOpenState", state);
  };

  private onLinkPressed = (route: IRoutes) => {
    rootStore.UpdateCurrentRoute(route.displayName);
    rootStore.routingStore.history.push(route.url);
    this.onNavStateChange("close");
  };

  private generateLinks = () => {
    const routes = rootStore.routeStore.routes;
    let links: any[] = [];
    _.map(routes, (route: IRoutes) => {
      links.push(
        <li className="rootheader__link-container">
          <button
            className="rootheader__link"
            title={route.arialLabel}
            onClick={() => this.onLinkPressed(route)}
          >
            <i className={`rootheader__icon ${route.icon}`}></i>
            <Text
              className="rootheader__link-text"
              type="p"
              text={route.displayName}
            />
            <i className={`rootheader__icon-extra las la-chevron-right`}></i>
          </button>
        </li>
      );
    });
    return links;
  };

  private links: any[] = [];

  componentWillMount() {
    this.links = this.generateLinks();
  }

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
            {this.links}
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
