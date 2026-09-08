export type CvBullet = string | { text: string; children?: string[] };

export type CvEntry = {
  heading: string;
  subheading: string;
  period: string;
  location?: string;
  bullets?: CvBullet[];
};

export const cv = {
  education: [
    {
      heading: "Arizona State University (ASU)",
      subheading: "Doctor of Philosophy in Industrial Engineering",
      period: "Aug 2026 – Present",
      location: "Tempe, Arizona",
      bullets: ["Advisor: Dr. Zihan Zhang"],
    },
    {
      heading: "National Yang Ming Chiao Tung University (NYCU)",
      subheading: "Master of Science in Industrial Engineering and Management",
      period: "Sep 2021 – Aug 2023",
      location: "Hsinchu, Taiwan",
      bullets: ["Advisor: Dr. Wen-Chih Chen"],
    },
    {
      heading: "National Tsing Hua University (NTHU)",
      subheading:
        "Bachelor of Science in Industrial Engineering and Engineering Management",
      period: "Sep 2017 – Jun 2021",
      location: "Hsinchu, Taiwan",
      bullets: [
        "Minor: Power Mechanical Engineering",
        "Certification: Data Science",
      ],
    },
  ] satisfies CvEntry[],

  experience: [
    {
      heading: "Micron Technology — Industrial Engineer",
      subheading: "Full-time, Department of Operations Intelligence",
      period: "Mar 2024 – Jun 2026",
      location: "Taichung, Taiwan",
      bullets: [
        {
          text: "Improved transfer efficiency in the Automated Material Handling System (AMHS)",
          children: [
            "Analyzed cross-fab transfer causes and redundant commands, developed improvement strategies, and contributed to a 63.6% reduction in redundant moves and a 36% reduction in AMHS-related tool idle time",
            "Automated AMHS data collection and processing in Python and built Tableau dashboards for operational performance monitoring",
          ],
        },
        {
          text: "Optimized tool–step assignment strategies to mitigate cross-fab congestion under high-loading conditions",
          children: [
            "Constructed a discrete-event simulation model for tool–step assignment evaluation, reducing simulation runtime by 98.6% (from approximately 36 hours to 30 minutes)",
            "Designed a customized Genetic Algorithm (GA) for tool–step assignment optimization and path-release strategy search, reducing cross-fab congestion while satisfying wafer-throughput requirements",
          ],
        },
      ],
    },
    {
      heading: "Micron Technology — Industrial Engineer",
      subheading: "Intern, Department of Operations Intelligence",
      period: "Jul 2022 – Aug 2022",
      location: "Taichung, Taiwan",
      bullets: [
        "Analyzed key drivers of cross-fab AMHS transfer inefficiencies and proposed actionable improvement strategies",
        "Created an AMHS performance metric and Tableau dashboards, with the metric later adopted for routine fab-level performance monitoring",
      ],
    },
    {
      heading: "Vanguard International Semiconductor — Data Analytics Engineer",
      subheading: "Intern, Department of Production Controlling",
      period: "Jul 2021 – Aug 2021",
      location: "Hsinchu, Taiwan",
      bullets: [
        "Built a regression-based production output forecasting model in Python, reducing mean relative error (MRE) by approximately 67% and achieving the target KPI of MRE < 15%",
      ],
    },
  ] satisfies CvEntry[],

  research: [
    {
      heading:
        "A Simulation-Based Optimization Study of Procurement Lot Sizing under Demand Uncertainty",
      subheading:
        "M.S. Thesis (2023), Department of Industrial Engineering and Management, NYCU",
      period: "2023",
      bullets: [
        "Formulated a stochastic procurement lot-sizing model to optimize ordering and inventory decisions under uncertain demand",
        "Designed a simulation–optimization framework combining Genetic Algorithm (GA) and Simultaneous Perturbation Stochastic Approximation (SPSA), improving solution quality by over 10% on large-scale instances relative to either method alone",
      ],
    },
    {
      heading:
        "Energy Efficiency Optimization of Variable-Frequency Strategy for AC Systems in a Wafer Manufacturing Plant",
      subheading:
        "Academia–Industry Collaboration (2020), Department of Industrial Engineering and Engineering Management, NTHU",
      period: "2020",
      bullets: [
        "Developed a variable-frequency control strategy for air-conditioning systems in semiconductor manufacturing",
        "Integrated regression models with Genetic Algorithm (GA) and Particle Swarm Optimization (PSO) to optimize energy consumption, achieving approximately US $70K in monthly cost savings",
      ],
    },
  ] satisfies CvEntry[],

  teaching: [
    {
      heading: "Teaching Assistant — Data Structure (Class Size: 60 Students)",
      subheading: "Department of Industrial Engineering and Management, NYCU",
      period: "Feb 2023 – Jun 2023",
      location: "Hsinchu, Taiwan",
      bullets: [
        "Provided student support on algorithm design, data structures, and programming concepts",
        "Designed homework and exam questions aligned with course learning objectives",
        "Graded coding assignments for 60 students and developed an automated grading system using predefined input/output cases to ensure consistent and accurate evaluation",
      ],
    },
  ] satisfies CvEntry[],

  awards: [
    {
      title: "Fulton Scholar IV",
      org: "Ira A. Fulton Schools of Engineering, Arizona State University",
      period: "2026–27",
    },
    {
      title: "Third Place, Summer Intern Project Competition",
      org: "Vanguard International Semiconductor Corp.",
      period: "2021",
    },
    {
      title: "Industrial Engineering Undergraduate Project Award",
      org: "National Tsing Hua University",
      period: "2020",
    },
  ],

  coursework: [
    {
      category: "Optimization & Operations Research",
      items:
        "Operations Research I & II; Advanced Operations Research (simulation optimization and algorithm evaluation); Linear Programming (simplex methods, duality, and sensitivity analysis); Integer Programming & Network Analysis (integer formulations and network-flow models); Stochastic Programming (scenario-based optimization under uncertainty)",
    },
    {
      category: "Stochastic Modeling & Statistics",
      items:
        "Probability Theory; Engineering Statistics; Stochastic Processes (Markov chains and probabilistic system modeling)",
    },
    {
      category: "Data Analytics & Computing",
      items:
        "Data Structures; Big Data Analytics & Data Mining (data-mining methods and R-based analysis); Smart Data Analytics (analytical methods for engineering and healthcare applications)",
    },
    {
      category: "Mathematical Foundations",
      items:
        "Linear Algebra; Discrete Mathematics; Numerical Analysis (approximation methods, error analysis, and numerical stability)",
    },
    {
      category: "Additional Engineering Coursework",
      items:
        "Engineering Mathematics I (ordinary differential equations); Manufacturing Processes; Applications of the Finite Element Method (finite-element modeling and engineering analysis)",
    },
  ],

  tools: [
    {
      category: "Programming Languages",
      items: ["C/C++", "C#", "Python", "R", "MATLAB", "JavaScript"],
    },
    {
      category: "Database",
      items: ["Microsoft SQL Server"],
    },
    {
      category: "Visualization",
      items: ["Tableau", "Microsoft Power BI"],
    },
  ],
};
