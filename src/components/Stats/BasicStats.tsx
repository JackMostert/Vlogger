import * as React from "react";
import Text from "../Text/Text";

interface IBasicStatsProps {
  onRenderIcon?: () => JSX.Element;
  icon?: string;
  title: string;
}

const BasicStats: React.FunctionComponent<IBasicStatsProps> = (props) => {
  return (
    <div className="basicstats">
      {!props.onRenderIcon && (
        <i className={`basicstats__icon ${props.icon}`}></i>
      )}
      {props.onRenderIcon && props.onRenderIcon()}
      <Text type="p" className="basicstats__text" text={props.title} />
    </div>
  );
};

export default BasicStats;
