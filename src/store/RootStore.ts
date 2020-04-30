import { action } from "mobx";
import LogicStore, { ILogicStore } from "./LogicStore";
import UIStore, { IUIStore } from "./UIStore";
import RouteStore, { IRouteStore } from "./RouteStore";

class RootStore implements IrootStore {
  public logicStore = LogicStore;
  public uiStore = UIStore;
  public routeStore = RouteStore;

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
  readonly CurrentRoute: string | undefined;
  UpdateCurrentRoute: (route: string) => void;
}
