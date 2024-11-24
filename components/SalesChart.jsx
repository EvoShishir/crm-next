"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "May", Restoration: 4000, Cleaning: 2400, Repair: 2400 },
  { name: "June", Restoration: 3000, Cleaning: 1398, Repair: 2210 },
  { name: "July", Restoration: 2000, Cleaning: 9800, Repair: 2290 },
  { name: "August", Restoration: 2780, Cleaning: 3908, Repair: 2000 },
  { name: "September", Restoration: 1890, Cleaning: 4800, Repair: 2181 },
  { name: "October", Restoration: 2390, Cleaning: 3800, Repair: 2500 },
];

const SalesChart = () => (
  <ResponsiveContainer height={300}>
    <BarChart
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Cleaning" fill="#8884d8" />
      <Bar dataKey="Restoration" fill="#82ca9d" />
      <Bar dataKey="Repair" fill="orange" />
    </BarChart>
  </ResponsiveContainer>
);

export default SalesChart;
