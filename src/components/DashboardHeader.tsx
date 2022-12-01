import React from "react";

import { Data } from "../types/data";
import DashboardBarChart from "./DashboardBarChart";

type Props = {
  data: Data;
};
type State = {
  currentIndex: number;
};

class DashboardHeader extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  render() {
    const { title, attributes } = this.props.data[this.state.currentIndex];
    return (
      <div>
        <h1 className="text-2xl">{title}</h1>
        {attributes && (
          <div className="grid grid-cols-2 items-center justify-between">
            <div className="cols-span-1 ">
              <table>
                <thead>
                  <th>Name</th>
                  <th>Value</th>
                  <th>Unit</th>
                </thead>
                {attributes.map(({ name, value, unit }) => (
                  <tr key={name}>
                    <td>{name}</td>
                    <td>{value}</td>
                    <td>{unit}</td>
                  </tr>
                ))}
              </table>
            </div>
            <div className="cols-span-1">
              <DashboardBarChart attributes={attributes} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default DashboardHeader;
