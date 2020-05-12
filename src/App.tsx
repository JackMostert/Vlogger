import React from "react";
import { inject, observer } from "mobx-react";
import { IrootStore } from "./store/RootStore";
import RootHeader from "./components/RootHeader/RootHeader";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./routes/Home";
import Discover from "./routes/Discover";
import Explore from "./routes/Explore";
import Watch from "./routes/Watch";
import DeviceOrientation, { Orientation } from "react-screen-orientation";
import Text from "./components/Text/Text";
import Logout from "./routes/Logout";

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
                <Redirect to="/home" />
              </Route>
              <Route path="/home">{(props) => <Home route={props} />}</Route>
              <Route path="/discover">
                {(props) => <Discover route={props} />}
              </Route>
              <Route path="/explore">
                {(props) => <Explore route={props} />}
              </Route>
              <Route path="/logout">
                {(props) => <Logout route={props} />}
              </Route>
              <Route path="/watch::videoID">
                {(props) => <Watch route={props} />}
              </Route>
            </Switch>
          </section>
        </Orientation>
      </DeviceOrientation>
    );
  }
}

export default App;
