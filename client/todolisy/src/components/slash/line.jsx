import React, { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

function LineGraph() {
  const chartRef = useRef(null);

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    // Destroy chart if it already exists to prevent reuse error
    if (chartRef.current) {
      chartRef.current.destroy();
    }
  }, [data]); // Re-run this effect when `data` changes

  return (
    <>
      <Line ref={chartRef} data={data} options={options} />
    </>
  );
}

export default LineGraph;
