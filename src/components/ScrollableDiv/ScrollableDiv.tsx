import * as React from "react";

interface IScrollableDivProps {
  direction: "hor" | "vert";
}

const ScrollableDiv: React.FunctionComponent<IScrollableDivProps> = (props) => {
  return (
    <section
      className={`scrollablediv scrollablediv--${props.direction}`}
      children={props.children}
    />
  );
};

export default ScrollableDiv;
