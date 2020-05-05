import * as React from "react";
import Text from "../../Text/Text";

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
          <Text text={props.hashtag} type="p" className="hashtag__text" />
        </header>
      </button>
    </section>
  );
};

export default HashTag;
