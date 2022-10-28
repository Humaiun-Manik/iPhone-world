import React, { useState } from "react";
import { useEffect } from "react";
import { Col, Row, Tooltip } from "react-bootstrap";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const [chartData, setChartData] = useState();

  useEffect(() => {
    fetch("chartData.json")
      .then((res) => res.json())
      .then((data) => setChartData(data));
  }, []);

  return (
    <div className="container text-center">
      <Row xs={1} md={2} className="g-4 py-5">
        <Col>
          <h2 className="text-uppercase text-primary my-5">Month wise sell</h2>
          <LineChart className="w-100" width={500} height={400} data={chartData}>
            <Line type="monotone" dataKey="sell" stroke="#8884d8" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
          </LineChart>
        </Col>
        <Col>
          <h2 className="text-primary my-5">Investment vs Revenue</h2>
          <AreaChart className="w-100" width={500} height={400} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </Col>
        <Col>
          <h2 className="text-primary my-5">Investment vs Revenue</h2>
          <BarChart className="w-100" width={500} height={400} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="investment" stackId="a" fill="#8884d8" />
            <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
          </BarChart>
        </Col>
        <Col>
          <h2 className="text-primary my-5">Investment vs Revenue</h2>
          <PieChart className="w-100" width={500} height={400}>
            <Pie data={chartData} dataKey="revenue" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" />
            <Pie
              data={chartData}
              dataKey="revenue"
              cx="50%"
              cy="50%"
              innerRadius={90}
              outerRadius={150}
              fill="#82ca9d"
              label
            />
            <Legend />
          </PieChart>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
