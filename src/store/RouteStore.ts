import { observable } from "mobx";

class RouteStore implements IRouteStore {
  @observable
  initial = "home";

  @observable
  current = "home";

  @observable
  visitedRoutes = [];
}

const routeStore: IRouteStore = new RouteStore();
export default routeStore;

export interface IRouteStore {
  initial: string;
  current: string | undefined;
  visitedRoutes: Array<string>;
}
