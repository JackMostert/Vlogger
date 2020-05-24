import * as React from "react";
import Text from "../components/Text/Text";
import { Link } from "react-router-dom";
import rootStore from "../store/RootStore";

interface ILoginProps {
  route: any;
  history?: any;
}

class Login extends React.Component<ILoginProps, { app: any; ui: any }> {
  componentDidMount() {
    rootStore.firebase.start((authResult: any, redirectUrl: any) => {
      return false;
    });
  }

  render() {
    return (
      <section className="page page-Login">
        <div id="firebaseui-auth-container"></div>
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

export default Login;
