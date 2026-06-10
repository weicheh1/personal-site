export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  links?: { label: string; href: string }[];
  abstract?: string;
};

export const publications: Publication[] = [
  {
    title:
      "Simulation-based optimization study of procurement lot sizing problem under demand uncertainty",
    authors: "Wei-Che Hsu",
    venue: "M.S. Thesis, National Yang Ming Chiao Tung University",
    year: 2023,
    abstract:
      "Developed a simulation–optimization framework combining heuristic and gradient-based optimization methods for procurement decisions under stochastic demand, achieving over 10% improvement in solution quality on large-scale problems.",
  },
];
