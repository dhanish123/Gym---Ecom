// import React, { useEffect } from 'react';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';

// const ProductSalesChart = () => {
//   // Sample sales data
//   const salesData = [
    // { month: 'January', sales: 100 },
    // { month: 'February', sales: 150 },
    // { month: 'March', sales: 220 },
    // { month: 'Apri', sales: 100 },
    // { month: 'May', sales: 150 },
    // { month: 'June' , sales: 220 },
    // { month: 'July ', sales: 100 },
    // { month: 'Aug', sales: 150 },
    // { month: 'Sept ',  },
    // { month: 'Oct ',  },
    // { month: ' Nov',  },
    // { month: 'Dec', },
//     // ... other months
//   ];

//   // Highcharts configuration options
//   const chartOptions = {
//     chart: {
//       type: 'spline',
//     },
//     title: {
//       text: 'Product Sales Month-wise',
//     },
//     xAxis: {
//       categories: salesData.map((data) => data.month),
//     },
//     yAxis: {
//       title: {
//         text: 'Sales',
//       },
//     },
//     plotOptions: {
//         spline: {
//           animation: {
//             duration: 8000, // Set the duration of the animation in milliseconds
//           },
//         },
//       },
//     series: [
//       {
//         name: 'Sales',
//         data: salesData.map((data) => data.sales),
//       },
//     ],
//   };

//   useEffect(() => {
//     // Any additional setup or data fetching can go here
//   }, []);

//   return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
// };

// export default ProductSalesChart;


//second

// import React, { useEffect, useState } from 'react';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';

// const ProductSalesChart = () => {
//   // State to store sales data
//   const [salesData, setSalesData] = useState([]);

//   // Fetch data from db.json
//   useEffect(() => {
//     fetch('/public/Data/db.json') // Replace with the actual path to your db.json file
//       .then((response) => response.json())
//       .then((data) => {
//         // Assuming that the data structure in db.json is similar to the salesData structure
//         const newData = data.data.map((item) => ({
//           month: item.title,
//           sales: Math.floor(Math.random() * 100) + 1, // You can replace this with the actual sales value
//         }));
//         // Set the salesData state variable with the fetched data
//         setSalesData(newData);
//       })
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);
  

//   // Highcharts configuration options
//   const chartOptions = {
//     chart: {
//       type: 'spline',
//     },
//     title: {
//       text: 'Product Sales Month-wise',
//     },
//     xAxis: {
//       categories: salesData.map((data) => data.month),
//     },
//     yAxis: {
//       title: {
//         text: 'Sales',
//       },
//     },
//     plotOptions: {
//       spline: {
//         animation: {
//           duration: 8000, // Set the duration of the animation in milliseconds
//         },
//       },
//     },
//     series: [
//       {
//         name: 'Sales',
//         data: salesData.map((data) => data.sales),
//       },
//     ],
//   };

//   return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
// };

// export default ProductSalesChart;


//3rd
// SalesChart.js

// ProductSalesChart.js

import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './ProductSalesChart.scss'
const ProductSalesChart = ({ salesData }) => {
  useEffect(() => {
    // Additional configurations or updates can be done here
  }, [salesData]);

  // Check if salesData is defined and is an array
  if (!salesData || !Array.isArray(salesData)) {
    return <div className='nodata'>No sales data available.</div>;
  }

  const options = {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Monthly Sales',
    },
    xAxis: {
      categories: salesData.map((sale) => `Month ${sale.month}`),
    },
    yAxis: {
      title: {
        text: 'Sales',
      },
    },
    plotOptions: {
              line: {
                animation: {
                  duration: 5000, // Set the duration of the animation in milliseconds
                },
              },
            },
    series: [
      {
        name: 'Sales',
        data: salesData.map((sale) => sale.value),
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default ProductSalesChart;




















