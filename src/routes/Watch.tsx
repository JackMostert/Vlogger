import * as React from "react";

interface IWatchProps {
  route: any;
}

const Watch: React.FunctionComponent<IWatchProps> = (props) => {
  return (
    <section className="page page-watch">
      <pre>
        <code style={{ color: "white" }}>
          {JSON.stringify(props.route.match.params, null, 2)}
        </code>
      </pre>
    </section>
  );
};

export default Watch;
