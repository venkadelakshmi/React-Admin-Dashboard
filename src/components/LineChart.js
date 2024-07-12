import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement
  } from 'chart.js'
  
  import { Line } from 'react-chartjs-2'
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement
  )
const LineChart = () => {
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
      
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;
