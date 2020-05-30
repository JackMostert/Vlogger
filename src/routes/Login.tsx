import * as React from "react";
import { Link, Redirect } from "react-router-dom";
import rootStore from "../store/RootStore";

interface ILoginProps {
  route: any;
  history?: any;
}

class Login extends React.Component<ILoginProps, any> {
  constructor(props: any) {
    super(props);

    rootStore.firebase.isLoggedIn().then((isLoggedIn: boolean) => {
      if (isLoggedIn) {
        this.setState({ isLoggedIn: true });
      } else {
        this.setState({ isLoggedIn: false });
      }
    });

    this.state = {
      isLoggedIn: undefined,
    };
  }

  componentDidUpdate() {
    if (this.state.isLoggedIn === false) {
      rootStore.firebase.start((authResult: any, redirectUrl: any) => {
        return false;
      });
    }
  }

  render() {
    if (this.state.isLoggedIn === undefined) {
      return <h1>Checking....</h1>;
    } else if (this.state.isLoggedIn === true) {
      return <Redirect to="/" />;
    } else {
      return (
        <section className="page page-Login">
          <div id="firebaseui-auth-container" className="login-container"></div>
          <div className="message">
            <p>
              By continuing, you are indicating that you accept our{" "}
              <Link to="/terms">Terms of Service</Link>
              and <Link to="/privacy">Privacy Policy.</Link>
            </p>
          </div>
        </section>
      );
    }
  }
}

export default Login;
