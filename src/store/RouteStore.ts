import { observable, action, autorun } from "mobx";
import { IrootStore } from "./RootStore";

class RouteStore implements IRouteStore {
  @observable
  rootStore: IrootStore;

  constructor(RootStore: IrootStore) {
    this.rootStore = RootStore;

    autorun((reaction) => {
      let currentRoute = this.rootStore.routingStore.location.pathname;
      currentRoute = currentRoute.replace(/\//g, "");
      const currentRouteCapitalized =
        currentRoute.charAt(0).toUpperCase() + currentRoute.slice(1);
      this.current = currentRouteCapitalized;
      reaction.dispose();
    });
  }

  @observable
  initial = "home";

  @observable
  current = "home";

  @observable
  routes = [
    {
      displayName: "Home",
      url: "/home",
      icon: "las la-home",
      visited: false,
      arialLabel: "",
    },
    {
      displayName: "Discover",
      url: "/discover",
      icon: "las la-mountain",
      visited: false,
      arialLabel: "",
    },
    {
      displayName: "Explore",
      url: "/explore",
      icon: "las la-binoculars",
      visited: false,
      arialLabel: "",
    },
    {
      displayName: "Watch Temp Link",
      url: "/watch:12",
      icon: "las la-binoculars",
      visited: false,
      arialLabel: "",
    },
  ];
}

export default RouteStore;

export interface IRouteStore {
  initial: string;
  current: string | undefined;
  routes: Array<IRoutes>;
}

export interface IRoutes {
  displayName: string;
  url: string;
  icon: string;
  visited: boolean;
  arialLabel: string;
}
