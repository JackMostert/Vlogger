import { IrootStore } from "./RootStore";
import { observable } from "mobx";

class LogicStore implements ILogicStore {
  @observable
  rootStore: IrootStore;

  constructor(RootStore: IrootStore) {
    this.rootStore = RootStore;
  }
}

export default LogicStore;

export interface ILogicStore {}
