import * as React from "react";

interface IHashTagProps {
  hashtag: string;
  url: string;
  onClick: (hashtag: string) => void;
}

const HashTag: React.FunctionComponent<IHashTagProps> = (props) => {
  return (
    <section className="hashtag">
      <button
        className="hashtag__btn"
        onClick={() => props.onClick(props.hashtag)}
      >
        <img
          className="hashtag__img"
          src={props.url + "?" + Math.random()}
          alt={""}
        />
        <header className="hashtag__header">
          <p className="hashtag__text">{props.hashtag}</p>
        </header>
      </button>
    </section>
  );
};

export default HashTag;
