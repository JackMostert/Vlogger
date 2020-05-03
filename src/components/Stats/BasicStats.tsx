import * as React from "react";

interface IBasicStatsProps {
  icon: string;
  title: string;
}

const BasicStats: React.FunctionComponent<IBasicStatsProps> = (props) => {
  return (
    <div className="basicstats">
      <i className={`basicstats__icon ${props.icon}`}></i>
      <p className="basicstats__text">{props.title}</p>
    </div>
  );
};

export default BasicStats;
