"use client";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Graph = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Check if there's an existing chart instance
    if (chartRef.current.chart) {
      // Destroy the existing chart
      chartRef.current.chart.destroy();
    }

    // Create the new chart
    chartRef.current.chart = new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        // Add your chart options here
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Clean up function to destroy the chart when component unmounts
    return () => {
      if (chartRef.current?.chart) {
        chartRef.current.chart.destroy();
      }
    };
  }, [data, chartRef.current]);

  return <canvas className="" ref={chartRef} id="line-chart" />;
};

export default Graph;
