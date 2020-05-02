import * as React from "react";

interface IHashTagProps {
  hashtag: string;
  url: string;
}

const HashTag: React.FunctionComponent<IHashTagProps> = (props) => {
  return (
    <section className="hashtag">
      <img
        className="hashtag__img"
        src={props.url + "?" + Math.random()}
        alt={""}
      />
      <header className="hashtag__header">
        <p className="hashtag__text">{props.hashtag}</p>
      </header>
    </section>
  );
};

export default HashTag;

// Text should be inside a header element
