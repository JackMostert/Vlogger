import * as React from "react";
import Text from "../../Text/Text";

interface IHistoryProps {
  thumbnail?: string;
  title?: string;
  hashtags: Array<string>;
}

const History: React.FunctionComponent<IHistoryProps> = (props) => {
  return (
    <button className="history-item">
      <img
        className="history-item__thumbnail"
        src={props.thumbnail + "?" + Math.random()}
        alt=""
      />
      <div className="history-item__item-container">
        <Text className="history-item__title" type="p" text={props.title} />
        <div className="history-item__hashtags">
          <Text
            className="history-item__hashtag"
            type="p"
            text={props.hashtags[0]}
          />
        </div>
      </div>
    </button>
  );
};

export default History;
