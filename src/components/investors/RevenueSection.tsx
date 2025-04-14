import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

// Revenue forecast data
const revenueData = [
  { year: "2025", totalRevenue: 10, userAcquisitionCost: 5 },
  { year: "2026", totalRevenue: 30, userAcquisitionCost: 15 },
  { year: "2027", totalRevenue: 120, userAcquisitionCost: 50 },
  { year: "2028", totalRevenue: 320, userAcquisitionCost: 160 },
  { year: "2029", totalRevenue: 1260, userAcquisitionCost: 1000 },
];

const chartConfig = {
  totalRevenue: {
    label: "Total Revenue (Revised)",
    color: "#22c55e" // green
  },
  userAcquisitionCost: {
    label: "User Acquisition Cost (Revised)",
    color: "#3b82f6" // blue
  }
};

const RevenueSection = () => {
  return (
    <div className="w-full py-20" style={{
      backgroundImage: `url('/bg.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <div className="container mx-auto px-4 md:px-8">
        <div 
          className="max-w-5xl mx-auto bg-white/30 backdrop-blur-sm p-10 rounded-lg shadow-lg" 
        >
          <h2 className="font-newsreader font-semibold text-4xl mb-10 text-center text-black">Revenue Potential - 5 Year Horizon</h2>
          
          <div className="space-y-4 text-black mb-12">
            <p className="text-base opacity-[0.84] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          
          <div className="mx-auto" style={{ maxWidth: "900px", height: "500px" }}>
            <ChartContainer config={chartConfig} className="h-full">
              <LineChart data={revenueData} margin={{ top: 20, right: 30, left: 50, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="year" 
                  label={{ value: 'Year', position: 'insideBottom', offset: -15 }}
                />
                <YAxis 
                  label={{ 
                    value: '€ Millions', 
                    angle: -90, 
                    position: 'insideLeft',
                    style: { textAnchor: 'middle' }
                  }}
                />
                <ChartTooltip
                  content={<ChartTooltipContent />}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="totalRevenue"
                  name="Total Revenue (Revised)"
                  stroke="var(--color-totalRevenue)"
                  strokeWidth={3}
                  activeDot={{ r: 8 }}
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="userAcquisitionCost"
                  name="User Acquisition Cost (Revised)"
                  stroke="var(--color-userAcquisitionCost)"
                  strokeWidth={3}
                  strokeDasharray="5 5"
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ChartContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueSection;
