import React from "react";
import { inject, observer } from "mobx-react";
import { IrootStore } from "./store/RootStore";
import RootHeader from "./components/RootHeader/RootHeader";
import { Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Discover from "./routes/Discover";
import Explore from "./routes/Explore";
import Watch from "./routes/Watch";
import DeviceOrientation, { Orientation } from "react-screen-orientation";
import Text from "./components/Text/Text";
import Logout from "./routes/Logout";
import Stream from "./routes/Stream";
import Login from "./routes/Login";
import Privacy from "./routes/Privacy";
import Terms from "./routes/Terms";
import LoginSuccess from "./routes/LoginSuccess";
import WatchVideo from "./routes/WatchVideo";

@inject("rootStore")
@observer
class App extends React.Component<{ rootStore?: IrootStore }> {
  render() {
    return (
      <DeviceOrientation lockOrientation={"portrait"}>
        <Orientation orientation="landscape" alwaysRender={false}>
          <div className="orientation-landscape">
            <Text
              type="p"
              text="We're sorry for the incoveniance, Support for landscape will becomming soon"
            />
          </div>
        </Orientation>
        <Orientation orientation="portrait">
          <section className="root">
            <RootHeader />
            <Switch>
              <Route exact path="/">
                {(props) => <Home route={props} />}
              </Route>
              <Route path="/discover">
                {(props) => <Discover route={props} />}
              </Route>
              <Route path="/explore">
                {(props) => <Explore route={props} />}
              </Route>
              <Route path="/login">{(props) => <Login route={props} />}</Route>
              <Route path="/logout">
                {(props) => <Logout route={props} />}
              </Route>
              <Route path="/golive::videoID">
                {(props) => <Stream route={props} />}
              </Route>
              <Route path="/watch::videoID">
                {(props) => <Watch route={props} />}
              </Route>
              <Route path="/loginsuccess">
                {(props) => <LoginSuccess route={props} />}
              </Route>
              <Route path="/terms">{(props) => <Terms route={props} />}</Route>
              <Route path="/privacy">
                {(props) => <Privacy route={props} />}
              </Route>
              <Route exact path="/watchvideo/:id">
                {(props) => <WatchVideo route={props} />}
              </Route>
              <Route path="/404">
                <h1>Page Not Found</h1>
              </Route>
            </Switch>
          </section>
        </Orientation>
      </DeviceOrientation>
    );
  }
}

export default App;
