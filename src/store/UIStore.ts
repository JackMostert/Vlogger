import { observable, action } from "mobx";
import { IrootStore } from "./RootStore";

class UIStore implements IUIStore {
  @observable
  rootStore: IrootStore;

  constructor(RootStore: IrootStore) {
    this.rootStore = RootStore;
  }

  @observable
  rootNavigationOpenState: "open" | "close" = "close";

  @action
  public set(property: string, value: any) {
    //@ts-ignore
    this[property] = value;
  }
}

export default UIStore;

export interface IUIStore {
  rootNavigationOpenState: "open" | "close";
  set(property: string, value: any): void;
}
