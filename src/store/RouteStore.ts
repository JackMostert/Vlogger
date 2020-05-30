import { observable } from "mobx";
import { IrootStore } from "./RootStore";
import _ from "lodash";

class RouteStore implements IRouteStore {
  @observable
  protected rootStore: IrootStore;

  constructor(RootStore: IrootStore) {
    this.rootStore = RootStore;
  }

  public getCurrentRoute = (): IRoutes | any => {
    const route = _.filter(
      this.routes,
      (route: IRoutes) =>
        route.url === this.rootStore.routingStore.location.pathname
    );
    return route[0];
    // return route[0] || this.rootStore.routingStore.history.push("/404");
  };

  public routes = [
    {
      displayName: "Home",
      url: "/",
      icon: "las la-home",
      arialLabel: "",
      displayOnMenu: true,
    },
    {
      displayName: "Discover",
      url: "/discover",
      icon: "las la-mountain",
      arialLabel: "",
      displayOnMenu: true,
    },
    {
      displayName: "Explore",
      url: "/explore",
      icon: "las la-binoculars",
      arialLabel: "",
      displayOnMenu: true,
    },
    {
      displayName: "login",
      url: "/login",
      icon: "las la-binoculars",
      arialLabel: "",
      displayOnMenu: true,
    },
    {
      displayName: "GO LIVE TEST",
      url:
        "/golive:e5281a5c-104b-41a8-adfa-4f563cacdadc17468a95-6327-4b33-9f72-2df5dd347279014fc3f6-46e0-48c4-9490-595908ce732c",
      icon: "las la-binoculars",
      arialLabel: "",
      displayOnMenu: true,
    },
    {
      displayName: "Watch TEST",
      url:
        "/watch:e5281a5c-104b-41a8-adfa-4f563cacdadc17468a95-6327-4b33-9f72-2df5dd347279014fc3f6-46e0-48c4-9490-595908ce732c",
      icon: "las la-binoculars",
      arialLabel: "",
      displayOnMenu: true,
    },
    {
      displayName: "Login Success",
      url: "/loginsuccess",
      icon: "las la-home",
      arialLabel: "",
      displayOnMenu: false,
    },
    {
      displayName: "Terms",
      url: "/terms",
      icon: "las la-home",
      arialLabel: "",
      displayOnMenu: false,
    },
    {
      displayName: "Privacy",
      url: "/privacy",
      icon: "las la-home",
      arialLabel: "",
      displayOnMenu: false,
    },
    {
      displayName: "Page Not Found",
      url: "/404",
      icon: "las la-home",
      arialLabel: "",
      displayOnMenu: false,
    },
    {
      displayName: "Watching Video",
      url: "/watchvideo/",
      icon: "las la-home",
      arialLabel: "",
      displayOnMenu: false,
    },
  ];
}

export default RouteStore;

export interface IRouteStore {
  routes: Array<IRoutes>;
  getCurrentRoute: () => IRoutes;
}

export interface IRoutes {
  displayName: string;
  url: string;
  icon: string;
  arialLabel: string;
  displayOnMenu: boolean;
}
