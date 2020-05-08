import * as React from "react";
import Text, { ITextProps } from "../Text/Text";

interface IIconProps {
  iconName: string;
  iconSize: number | string;
  textProps?: ITextProps;
  className?: string;
  style?: React.CSSProperties;
}

const Icon: React.FunctionComponent<IIconProps> = (props) => {
  const { iconName, iconSize, textProps, className, style } = props;
  return (
    <div className={`icon ${className ? className : ""}`}>
      <i
        className={`${iconName} icon__icon`}
        style={{ fontSize: iconSize, ...style }}
      ></i>
      {textProps && <Text {...textProps} />}
    </div>
  );
};

export default Icon;
