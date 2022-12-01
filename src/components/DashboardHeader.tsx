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

  setCurrentIndex(currentIndex: number) {
    this.setState({ currentIndex });
  }

  render() {
    const { title, attributes } = this.props.data[this.state.currentIndex];
    return (
      <div>
        <h1 className="text-2xl mb-5">{title}</h1>
        {attributes && (
          <div className="grid grid-cols-2  gap-10">
            <div className="cols-span-2 lg:cols-span-1 border border-slate-100 p-5 rounded-lg">
              <table width="100%">
                <thead className="text-left">
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
            <div className="cols-span-2 lg:cols-span-1">
              <DashboardBarChart attributes={attributes} />
            </div>
          </div>
        )}

        <div className="mx-auto text-center mt-10">
          <input
            type="range"
            min="0"
            max={this.props.data.length - 1}
            value={this.state.currentIndex}
            onChange={(e) => this.setCurrentIndex(parseInt(e.target.value))}
            className={"w-64"}
          ></input>
        </div>
      </div>
    );
  }
}

export default DashboardHeader;
