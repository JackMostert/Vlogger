import { observable, action } from "mobx";
import { IrootStore } from "./RootStore";

class UserStore implements IUserStore {
  @observable
  protected rootStore: IrootStore;

  @observable
  public user?: IUserData = {
    isLoggedIn: false,
    displayName: "",
    email: "",
    emailVerified: "",
    photoURL: "",
    uid: "",
    phoneNumber: "",
    providerData: "",
  };

  constructor(RootStore: IrootStore) {
    this.rootStore = RootStore;
  }

  @action
  public updateUserData = (user: any, isLoggedIn: boolean) => {
    if (user === undefined) {
      this.user = undefined;
      return;
    }
    this.user = {
      isLoggedIn: isLoggedIn,
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      photoURL: user.photoURL,
      uid: user.uid,
      phoneNumber: user.phoneNumber,
      providerData: user.providerData,
    };
  };
}

export interface IUserStore {
  updateUserData: (user: any, isLoggedIn: boolean) => void;
  user?: IUserData;
}

interface IUserData {
  isLoggedIn: boolean;
  displayName: string;
  email: string;
  emailVerified: string;
  photoURL: string;
  uid: string;
  phoneNumber: string;
  providerData: string;
}

export default UserStore;
