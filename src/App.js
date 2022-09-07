import React from "react";
import "./App.css";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  AreaChart,
  Area,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  Bar,
} from "recharts";

const App = () => {
  const data = [
    { name: "Apr 04", users: 32 },
    { name: "Apr 07", users: 40 },
    { name: "Apr 10 ", users: 28 },
    { name: "Apr 13", users: 10 },
    { name: "Apr 16", users: 15 },
    { name: "Apr 18", users: 25 },
    { name: "Apr 21", users: 30 },
  ];

  return (
    <div className="App">
            <div className="card">
        <div className="topnav">
          <a href="#contact">Sales This Months <br/><span>users from all channels</span></a>
          
          <a href="#about" className="split">
          <i class="fa fa-ellipsis-h"></i>
          </a>
        </div>
        <div className="tilter">
          <span>$</span> 14,094
          {/* <div className="box">
            <i class="fa fa-chevron-up"></i> 2.6%
          </div> */}
        </div>
        <div className="context">Another $48,346 to Goal</div>
        <ResponsiveContainer width="100%" aspect={3}>
          <AreaChart
            width={730}
            height={250}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis axisLine={false} fontSize={12} dataKey="name" />
            <YAxis axisLine={false} fontSize={12} unit="K" />
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="users"
              // stroke="#8884d8"
              tension="0"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="card">
        <div className="tilter">
          <span>$</span> 2,420
          <div className="box">
            <i class="fa fa-chevron-up"></i> 2.6%
          </div>
        </div>
        <div className="context">Average Daily Sales</div>
        <div className="size">
          <ResponsiveContainer width={320} height={300}>
            <BarChart
              width={700}
              height={300}
              data={data}
              margin={{
                top: 0,
                right: 30,
                left: 0,
                bottom: 0,
              }}
              barSize={22}
            >
              <Bar dataKey="users" fill="#8884d8" radius={[50, 50, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};

export default App;
