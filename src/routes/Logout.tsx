import * as React from "react";
import Text from "../components/Text/Text";

interface ILogoutProps {
  route: any;
  history?: any;
}

const Logout: React.FunctionComponent<ILogoutProps> = (props) => {
  return (
    <section className="page page-logout">
      <Text
        type="h6"
        style={{ color: "white" }}
        text="You have been logged out"
      />
    </section>
  );
};

export default Logout;
