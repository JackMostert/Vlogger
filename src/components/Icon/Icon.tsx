import * as React from "react";
import Text, { ITextProps } from "../Text/Text";

interface IIconProps {
  iconName: string;
  inline?: boolean;
  iconSize: number | string;
  textProps?: ITextProps;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Icon: React.FunctionComponent<IIconProps> = (props) => {
  const {
    onClick,
    iconName,
    iconSize,
    textProps,
    className,
    style,
    inline,
  } = props;
  let ClassName = "icon";

  if (className) {
    ClassName += ` ${className}`;
  }

  if (inline) {
    ClassName += ` icon--inline`;
  }

  const Element = !!onClick ? "button" : "div";
  const allowOnClick = !!onClick ? onClick : undefined;

  return React.createElement(
    Element,
    { className: ClassName, onClick: allowOnClick },
    [
      <i
        onClick={onClick}
        className={`${iconName} icon__icon`}
        style={{ fontSize: iconSize, ...style }}
      ></i>,
      textProps && <Text {...textProps} />,
    ]
  );
};

export default Icon;
