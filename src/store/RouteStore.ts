import { observable } from "mobx";

class RouteStore implements IRouteStore {
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
      icon: "las la-chevron-right",
      visited: false,
      arialLabel: "",
    },
  ];
}

const routeStore: IRouteStore = new RouteStore();
export default routeStore;

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
