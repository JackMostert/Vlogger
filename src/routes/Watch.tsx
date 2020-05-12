import * as React from "react";
import Video from "../components/Video/Video";

interface IWatchProps {
  route: any;
}

const Watch: React.FunctionComponent<IWatchProps> = (props) => {
  return (
    <section className="page page-watch">
      <Video />
    </section>
  );
};

export default Watch;
