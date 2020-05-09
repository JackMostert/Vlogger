import * as React from "react";
import moment from "moment";
import MediaCard from "../components/Cards/Media/Media";

interface IDiscoverProps {
  route: any;
}

const Discover: React.FunctionComponent<IDiscoverProps> = (props) => {
  return (
    <div className="page page-discover">
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
    </div>
  );
};

export default Discover;
