import React from "react";

import { DataAttributes } from "../types/data";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  attributes: DataAttributes;
};

class DashboardBarChart extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const chartData = {
      labels: Object.values(this.props.attributes).map(({ name }) => name),
      datasets: [
        {
          data: Object.values(this.props.attributes).map(({ value }) => value),
        },
      ],
    };
    return (
      <Bar
        data={chartData}
        options={{
          indexAxis: "y",
          scales: {
            x: {
              display: false,
            },
            y: {
              display: false,
            },
          },
        }}
      />
    );
  }
}

export default DashboardBarChart;
