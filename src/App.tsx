import React from "react";
import { inject, observer } from "mobx-react";
import { IrootStore } from "./store/RootStore";
import RootHeader from "./components/RootHeader/RootHeader";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./routes/Home";
import Discover from "./routes/Discover";
import Explore from "./routes/Explore";
import Watch from "./routes/Watch";

@inject("rootStore")
@observer
class App extends React.Component<{ rootStore?: IrootStore }> {
  render() {
    return (
      <section className="root">
        <Router>
          <RootHeader />
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home">{(props) => <Home route={props} />}</Route>
            <Route path="/discover">
              {(props) => <Discover route={props} />}
            </Route>
            <Route path="/watch/:videoID">
              {(props) => <Watch route={props} />}
            </Route>
            <Route path="/explore">
              {(props) => <Explore route={props} />}
            </Route>
          </Switch>
        </Router>
      </section>
    );
  }
}

export default App;
