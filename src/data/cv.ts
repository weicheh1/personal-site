export type CvEntry = {
  heading: string;
  subheading: string;
  period: string;
  location?: string;
  bullets?: string[];
  details?: string;
};

export const cv = {
  education: [
    {
      heading: "Ph.D. in Industrial Engineering",
      subheading: "Arizona State University",
      period: "2026 – Present",
      location: "Tempe, AZ, USA",
      bullets: [
        "School of Computing and Augmented Intelligence",
        "Fulton Scholar IV Graduate Research Associate",
        "Research focus: high-dimensional data analysis, simulation-optimization, and stochastic modeling",
      ],
    },
    {
      heading: "M.S. in Industrial Engineering and Management",
      subheading: "National Yang Ming Chiao Tung University",
      period: "2021 – 2023",
      location: "Hsinchu, Taiwan",
      bullets: [
        "Thesis: Simulation-based optimization study of procurement lot sizing problem under demand uncertainty",
        "Developed a simulation–optimization framework combining heuristic and gradient-based methods, achieving over 10% improvement in solution quality on large-scale problems.",
        "Coursework: Advanced Operations Research, Stochastic Processes, Stochastic Programming, Linear & Integer Programming",
      ],
    },
    {
      heading: "B.S. in Industrial Engineering and Engineering Management",
      subheading: "National Tsing Hua University",
      period: "2017 – 2021",
      location: "Hsinchu, Taiwan",
      bullets: [
        "Minor in Power Mechanical Engineering",
        "Data Science Program Certification",
        "Coursework: Operations Research, Probability Theory, Engineering Statistics, Numerical Analysis, Big Data Analytics",
      ],
    },
  ] satisfies CvEntry[],

  experience: [
    {
      heading: "Industrial Engineer",
      subheading: "Micron Technology",
      period: "Mar 2024 – Jun 2026",
      location: "Taichung, Taiwan",
      bullets: [
        "Improved AMHS transfer efficiency by optimizing carrier routing under uncertainty and automating data collection for system visibility",
        "Developed simulation models and heuristic search methods for tool–step assignment to reduce inter-fab transfers under high loading conditions",
        "Analyzed how alternative assignment patterns influence transfer volume given capacity limits and process-rate variability",
      ],
    },
    {
      heading: "Teaching Assistant — Data Structures",
      subheading: "National Yang Ming Chiao Tung University",
      period: "Feb 2023 – Jun 2023",
      location: "Hsinchu, Taiwan",
      bullets: [
        "Supported instruction and coursework for the undergraduate Data Structures course",
      ],
    },
    {
      heading: "Operations Intelligence Intern",
      subheading: "Micron Technology",
      period: "Jul 2022 – Aug 2022",
      location: "Houli, Taiwan",
      bullets: [
        "Analyzed AMHS cross-fab transfer causes and identified key factors contributing to transfer inefficiencies",
        "Designed interactive Tableau dashboards to automate data visualization and support monitoring",
      ],
    },
    {
      heading: "Data Analyst Intern",
      subheading: "Vanguard International Semiconductor",
      period: "Jul 2021 – Aug 2021",
      location: "Hsinchu, Taiwan",
      bullets: [
        "Built an output forecast model using multiple regression analysis (MRE < 15%), outperforming the previous method",
        "Collected and organized daily production data via Power BI for the Production Controlling department",
        "Won 3rd place in the intern project presentation",
      ],
    },
    {
      heading: "Industry–Academia Cooperation",
      subheading: "Sino American Silicon Products (SAS Wafer)",
      period: "Jan 2020 – Dec 2020",
      location: "Hsinchu, Taiwan",
      bullets: [
        "Optimized variable-frequency HVAC strategies in wafer manufacturing using regression modeling (MAPE < 5%)",
        "Applied Genetic Algorithms and Particle Swarm Optimization to minimize energy costs under operational constraints",
        "Delivered over USD 70,000 in monthly energy savings; received 1st Place in the NTHU IE Undergraduate Project Award",
      ],
    },
  ] satisfies CvEntry[],

  skills: [
    {
      category: "Programming",
      items: ["Python", "R", "MATLAB", "C/C++", "C#"],
    },
    {
      category: "Optimization & Simulation",
      items: [
        "Discrete-event simulation",
        "Stochastic optimization",
        "Heuristic search",
        "CPLEX",
        "Genetic Algorithms",
        "Particle Swarm Optimization",
      ],
    },
    {
      category: "Data & Analytics",
      items: [
        "Regression modeling",
        "Machine learning",
        "Power BI",
        "Tableau",
        "High-dimensional data analysis",
      ],
    },
    {
      category: "Domain",
      items: [
        "Semiconductor manufacturing",
        "AMHS logistics",
        "Operations research",
        "Inventory control",
      ],
    },
  ],

  awards: [
    {
      title: "Fulton Scholar IV",
      org: "Ira A. Fulton Schools of Engineering, Arizona State University",
      period: "Aug 2026 - Jul 2027",
    },
    {
      title: "Industrial Engineering Undergraduate Project Award — 1st Place",
      org: "NTHU Department of Industrial Engineering and Engineering Management",
      period: "Dec 2020",
    },
    {
      title: "Summer Internship Project Competition — 3rd Place",
      org: "Vanguard International Semiconductor",
      period: "Aug 2021",
    },
  ],

  certifications: [
    "Data Science Program Certification — National Tsing Hua University (Jul 2021)",
    "Machine Learning — Stanford University, Coursera (Sep 2021)",
    "JavaScript Algorithms and Data Structures — freeCodeCamp (Apr 2022)",
  ],
};
