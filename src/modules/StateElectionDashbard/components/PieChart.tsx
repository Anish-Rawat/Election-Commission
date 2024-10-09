import { Box, Typography } from "@mui/material";
import { CardsState } from "../type";
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  pieChartData?: CardsState[];
}

const PieChart: React.FC<PieChartProps> = ({ pieChartData }) => {
  const labels: string[] = pieChartData?.map((data) => data.color) || [];
  const values: number[] = pieChartData?.map((data) => data.won) || [];

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Dataset 1",
        data: values,
        backgroundColor: labels.map((label) => label),
        borderColor: "rgba(255, 255, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: true,
        position: "bottom", // Position the legend at the bottom
        align: "center", // Align the legend items horizontally
        labels: {
          boxWidth: 20, // Adjust the width of the color box in the legend
        },
      },
    },
  };

  return (
    <Box
      sx={{
        width: "50%",
        height: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <Typography
        sx={{
          backgroundColor: "#D7CAFF",
          padding: "10px",
          width: "100%",
          textAlign: "center",
        }}
      >
        Party Wise Results
      </Typography>
      <Box
        sx={{
          width: "500px",
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pie data={chartData} />
      </Box>
    </Box>
  );
};

export default PieChart;
