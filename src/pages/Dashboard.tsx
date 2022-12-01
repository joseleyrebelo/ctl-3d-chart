import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import { Data } from "../types/data";

type Props = {};
type State = {
  data?: Data;
  currentIndex: number;
};

class Dashboard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  componentDidMount() {
    fetch("/json/data.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data });
      });
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>
  ): void {
    console.log(this.state.data);
  }

  render() {
    return (
      <div className="ctl-userArea__holder">
        <div className="ctl-userArea__container !max-w-[1000px] ">
          {this.state.data ? (
            <DashboardHeader data={this.state.data} />
          ) : (
            <div className="">No data loaded.</div>
          )}
        </div>
      </div>
    );
  }
}

export default Dashboard;
