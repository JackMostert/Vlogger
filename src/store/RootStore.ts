import LogicStore, { ILogicStore } from "./LogicStore";
import UIStore, { IUIStore } from "./UIStore";
import RouteStore, { IRouteStore } from "./RouteStore";
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import Firebase, { IFirebaseStore } from "./Firebase";
const createHistory = require("history").createBrowserHistory;

const routingStore = new RouterStore();
const browserHistory = createHistory();
export const history = syncHistoryWithStore(browserHistory, routingStore);

class RootStore implements IrootStore {
  public logicStore: ILogicStore;
  public uiStore: IUIStore;
  public routeStore: IRouteStore;
  public routingStore: RouterStore;
  public firebase: IFirebaseStore;

  constructor() {
    this.routingStore = routingStore;
    this.logicStore = new LogicStore(this);
    this.uiStore = new UIStore(this);
    this.routeStore = new RouteStore(this);
    this.firebase = new Firebase(this);
  }
}

const rootStore: IrootStore = new RootStore();
export default rootStore;

export interface IrootStore {
  logicStore: ILogicStore;
  uiStore: IUIStore;
  routeStore: IRouteStore;
  routingStore: RouterStore;
  firebase: IFirebaseStore;
}
