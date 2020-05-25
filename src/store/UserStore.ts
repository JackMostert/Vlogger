import { observable } from "mobx";
import { IrootStore } from "./RootStore";

class UserStore implements IUserStore {
  @observable
  protected rootStore: IrootStore;

  constructor(RootStore: IrootStore) {
    this.rootStore = RootStore;
  }
}

export interface IUserStore {}

export default UserStore;
