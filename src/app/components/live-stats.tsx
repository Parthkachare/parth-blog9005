import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Eye, TrendingUp, Users, Clock } from "lucide-react";

export function LiveStats() {
  const [visitors, setVisitors] = useState(0);
  const [views, setViews] = useState(0);
  const [avgTime, setAvgTime] = useState("0:00");

  useEffect(() => {
    const baseVisitors = 127;
    const baseViews = 1543;

    const interval = setInterval(() => {
      const randomVisitorChange = Math.floor(Math.random() * 3);
      const randomViewChange = Math.floor(Math.random() * 5);

      setVisitors(baseVisitors + randomVisitorChange);
      setViews(baseViews + randomViewChange);

      const minutes = Math.floor(Math.random() * 5) + 2;
      const seconds = Math.floor(Math.random() * 60);
      setAvgTime(`${minutes}:${seconds.toString().padStart(2, "0")}`);
    }, 3000);

    setVisitors(baseVisitors);
    setViews(baseViews);
    setAvgTime("3:24");

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: <Users className="w-4 h-4" />,
      label: "Online Now",
      value: visitors,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: <Eye className="w-4 h-4" />,
      label: "Total Views",
      value: views.toLocaleString(),
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: <Clock className="w-4 h-4" />,
      label: "Avg. Time",
      value: avgTime,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: <TrendingUp className="w-4 h-4" />,
      label: "Growth",
      value: "+23%",
      color: "text-[#FF7A00]",
      bgColor: "bg-[#FF7A00]/10",
    },
  ];

  return (
    <motion.div
      className="bg-card border-2 border-border rounded-2xl p-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2 mb-6">
        <motion.div
          className="w-3 h-3 rounded-full bg-green-500"
          animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <h3 className="text-lg font-bold">Live Statistics</h3>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className={`${stat.bgColor} border border-border/50 rounded-xl p-4`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className={`flex items-center gap-2 mb-2 ${stat.color}`}>
              {stat.icon}
              <span className="text-xs font-medium">{stat.label}</span>
            </div>
            <motion.div
              className="text-2xl font-bold"
              key={stat.value.toString()}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {stat.value}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
