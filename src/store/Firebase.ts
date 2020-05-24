import * as firebase from "firebase";
import * as firebaseui from "firebaseui";
import { observable } from "mobx";
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

  constructor(RootStore: IrootStore) {
    this.rootStore = RootStore;
    firebase.initializeApp(firebaseConfig);
    this.auth = new firebaseui.auth.AuthUI(firebase.auth());
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.rootStore.userstore.updateUserData(user, true);
      } else {
        this.rootStore.userstore.updateUserData(undefined, false);
      }
    });
  }

  @observable
  public auth: any;

  public start = (callback: Function) => {
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: callback,
      },
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
      ],
    };
    this.auth.start("#firebaseui-auth-container", uiConfig);
  };

  public getUser = () => {
    console.log(this.auth);
  };
}

export interface IFirebaseStore {
  auth: any;
  start: (callback: Function) => void;
  getUser: () => void;
}

export default Firebase;
