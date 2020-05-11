import { action } from "mobx";
import LogicStore, { ILogicStore } from "./LogicStore";
import UIStore, { IUIStore } from "./UIStore";
import RouteStore, { IRouteStore } from "./RouteStore";
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
const createHistory = require("history").createBrowserHistory;

const routingStore = new RouterStore();
const browserHistory = createHistory();
export const history = syncHistoryWithStore(browserHistory, routingStore);

class RootStore implements IrootStore {
  public logicStore: ILogicStore;
  public uiStore: IUIStore;
  public routeStore: IRouteStore;
  public routingStore: RouterStore;

  constructor() {
    this.routingStore = routingStore;
    this.logicStore = new LogicStore(this);
    this.uiStore = new UIStore(this);
    this.routeStore = new RouteStore(this);
  }

  public get CurrentRoute() {
    return this.routeStore.current;
  }

  @action
  public UpdateCurrentRoute = (route: string) => {
    this.routeStore.current = route;
  };
}

const rootStore: IrootStore = new RootStore();
export default rootStore;

export interface IrootStore {
  logicStore: ILogicStore;
  uiStore: IUIStore;
  routeStore: IRouteStore;
  routingStore: RouterStore;
  readonly CurrentRoute: string | undefined;
  UpdateCurrentRoute: (route: string) => void;
}
