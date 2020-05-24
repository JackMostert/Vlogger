import * as React from "react";

interface IStreamProps {
  route: any;
}

const Stream: React.FunctionComponent<IStreamProps> = (props) => {
  return (
    <section className="page page-stream">
      <div className="video-control"></div>
    </section>
  );
};

export default Stream;
