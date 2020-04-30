import { observable, action } from "mobx";

class UIStore implements IUIStore {
  @observable
  rootNavigationOpenState: "open" | "close" = "close";

  @action
  public set(property: string, value: any) {
    //@ts-ignore
    this[property] = value;
  }
}

const uiStore: IUIStore = new UIStore();
export default uiStore;

export interface IUIStore {
  rootNavigationOpenState: "open" | "close";
  set(property: string, value: any): void;
}
