export type ResearchProject = {
  title: string;
  status: string;
  description: string;
  tags: string[];
};

export const researchProjects: ResearchProject[] = [
  {
    title: "AMHS Routing & Transfer Efficiency",
    status: "Industry — Micron",
    description:
      "Optimized carrier routing in automatic material handling systems by balancing transfer efficiency and redundant movement under uncertainty. Automated data collection and improved system visibility for monitoring and analysis.",
    tags: ["AMHS", "simulation", "semiconductor logistics"],
  },
  {
    title: "Tool–Step Assignment Optimization",
    status: "Industry — Micron",
    description:
      "Developed a simulation model to analyze how alternative tool–step assignment patterns influence inter-fab transfer volume under capacity limits and process-rate variability. Applied heuristic search to identify configurations that reduce congestion without affecting wafer output.",
    tags: ["simulation-optimization", "heuristic search", "capacity planning"],
  },
  {
    title: "Procurement Lot Sizing under Demand Uncertainty",
    status: "M.S. Thesis",
    description:
      "Built a simulation–optimization framework combining heuristic and gradient-based methods for raw material procurement under stochastic demand. Achieved over 10% improvement in solution quality on large-scale problems with an auto-adjustment mechanism to avoid local optima.",
    tags: ["stochastic programming", "inventory control", "simulation"],
  },
  {
    title: "Energy Efficiency Optimization for HVAC Systems",
    status: "Undergraduate — 1st Place Award",
    description:
      "Applied data-driven optimization to variable-frequency air-conditioning strategies in wafer fabrication. Cleaned 1.3M data records, built regression models (MAPE < 5%), and used genetic algorithms and PSO to minimize HVAC energy costs — saving over USD 70,000/month.",
    tags: ["energy optimization", "genetic algorithms", "regression"],
  },
  {
    title: "Stochastic Inventory Control",
    status: "Academic",
    description:
      "Evaluated policies for minimizing total system cost under demand and lead-time uncertainty using simulation optimization methods including FDSA, SPSA, genetic algorithms, and response surface methodology.",
    tags: ["stochastic modeling", "inventory", "simulation optimization"],
  },
  {
    title: "Route Optimization for Distribution Operations",
    status: "Academic",
    description:
      "Modeled a vehicle routing problem with time-window constraints and lateness penalties. Built the mathematical model in C# with CPLEX and designed a heuristic for large-scale instances when exact optimization became computationally expensive.",
    tags: ["routing", "CPLEX", "operations research"],
  },
];
