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

    return route[0] || this.rootStore.routingStore.history.push("/404");
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
      displayName: "Watch Temp Link",
      url: "/watch:12",
      icon: "las la-binoculars",
      arialLabel: "",
      displayOnMenu: true,
    },
    {
      displayName: "Page Not Found",
      url: "/404",
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
