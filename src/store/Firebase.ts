import * as firebase from "firebase";
import * as firebaseui from "firebaseui";
import { observable, action } from "mobx";
import { IrootStore } from "./RootStore";

const firebaseConfig = {
  apiKey: "AIzaSyCavCxmfD28eCfaK6Fw4ACwmmuwOlhPbzs",
  authDomain: "vlogger-990d6.firebaseapp.com",
  databaseURL: "https://vlogger-990d6.firebaseio.com",
  projectId: "vlogger-990d6",
  storageBucket: "vlogger-990d6.appspot.com",
  messagingSenderId: "52026097922",
  appId: "1:52026097922:web:daac48ea8fd8eb3b2f821b",
};

class Firebase implements IFirebaseStore {
  @observable
  protected rootStore: IrootStore;

  @observable
  public firebaseui: any = undefined;

  @observable
  public app: any;

  constructor(RootStore: IrootStore) {
    this.rootStore = RootStore;
    this.app = firebase.initializeApp(firebaseConfig);
    this.firebaseui = new firebaseui.auth.AuthUI(this.app.auth());
  }

  public isLoggedIn = (): Promise<boolean> =>
    new Promise((res) => {
      this.app.auth().onAuthStateChanged((user: any) => {
        if (user) {
          res(true);
        } else {
          res(false);
        }
      });
    });

  @action
  public getUserInfo = () => {
    const user = this.app.auth().currentUser;
    if (user) {
      return {
        displayName: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified,
        photoURL: user.photoURL,
        uid: user.uid,
        phoneNumber: user.phoneNumber,
        providerData: user.providerData,
      };
    } else return undefined;
  };

  public start = (callback: Function) => {
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: callback,
      },
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
      ],
    };
    this.firebaseui.start("#firebaseui-auth-container", uiConfig);
  };
}

export interface IFirebaseStore {
  start: (callback: Function) => void;
  getUserInfo: () => void;
  isLoggedIn: () => Promise<boolean>;
}

interface IUserData {
  displayName: string;
  email: string;
  emailVerified: string;
  photoURL: string;
  uid: string;
  phoneNumber: string;
  providerData: string;
}

export default Firebase;
