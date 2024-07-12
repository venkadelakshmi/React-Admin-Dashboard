import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement
  } from 'chart.js'
  
  import { Bar } from 'react-chartjs-2'
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement
  )
const BarChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/movies');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Chart configuration
  const chartData = {
    labels: data.map(item => item.release_year),
    datasets: [
      {
        label: 'Graph Data',
        fill: false,
        backgroundColor: "rgba(2,117,216,1)",
        borderColor: "rgba(2,117,216,1)",
        data: data.map(item => item.id),
      },
    ],
  };

  return (
    <div>
      
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;
