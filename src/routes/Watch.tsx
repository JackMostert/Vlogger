import * as React from "react";
import Video from "../components/Video/Video";
import Description from "../components/Description/Description";

interface IWatchProps {
  route: any;
}

const Watch: React.FunctionComponent<IWatchProps> = (props) => {
  return (
    <section className="page page-watch">
      <Video />
      <Description />
    </section>
  );
};

export default Watch;
