import * as React from "react";

export interface ITextProps {
  className?: string;
  text?: string;
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  fontSize?: number | string;
  style?: React.CSSProperties;
}

const Text: React.FunctionComponent<ITextProps> = (props) => {
  let ClassName = `text text-type-${props.type}`;

  if (props.className) {
    ClassName += ` ${props.className}`;
  }

  return React.createElement(
    props.type,
    {
      className: ClassName,
      style: props.style,
      fontSize: props.fontSize,
    },
    props.text || ""
  );
};

export default Text;
