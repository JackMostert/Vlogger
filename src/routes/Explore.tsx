import * as React from "react";
import Icon from "../components/Icon/Icon";
import HashTag from "../components/Cards/HashTag/HashTag";

interface IExploreProps {
  route: any;
}

const Ghashtags = () => {
  let AH = [];
  for (let i = 0; i < 30; i++) {
    AH.push(
      <HashTag
        hashtag="#happy feelings"
        url="https://picsum.photos/200/200"
        onClick={(hashtag: string) => {}}
      />
    );
  }
  return AH;
};

const Explore: React.FunctionComponent<IExploreProps> = (props) => {
  return (
    <div className="page page-explore">
      <div className="page-explore__form-container">
        <Icon
          iconName="las la-search page-explore__input-field-icon"
          iconSize={29}
        />
        <input
          className="page-explore__input-field"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="page-explore__hashtag-grid">{Ghashtags()}</div>
    </div>
  );
};

export default Explore;
