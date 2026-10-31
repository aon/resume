import type { Job } from "./types";

export const scoutUrl = "https://github.com/CoinFabrik/scout";

// Reverse-chronological; every English variant renders jobs in this order.
const jobs = {
  profound: {
    company: "Profound",
    location: "Remote, USA",
    role: "Member of Technical Staff",
    period: "Oct 2026 – Present",
  },
  afippi: {
    company: "Afippi",
    location: "Buenos Aires, Argentina",
    role: "Founder & Full Stack Engineer",
    period: "Jul 2025 – Present",
  },
  moonsong: {
    company: "Moonsong Labs",
    location: "Remote, USA",
    role: "Senior Full Stack Engineer",
    period: "Oct 2023 – Sep 2026",
  },
  coinfabrik: {
    company: "CoinFabrik",
    location: "Buenos Aires, Argentina",
    role: "Technical Lead",
    period: "Sep 2022 – Oct 2023",
  },
  duollar: {
    company: "Duollar",
    location: "Buenos Aires, Argentina",
    role: "Full Stack Engineer",
    period: "Apr 2022 – Oct 2022",
  },
  marvell: {
    company: "Marvell Technology",
    location: "Cordoba, Argentina",
    role: "Digital Design Engineer",
    period: "Apr 2021 – Apr 2022",
  },
} satisfies Record<string, Omit<Job, "bullets">>;

export type JobId = keyof typeof jobs;

export function experience(bullets: Record<JobId, Job["bullets"]>): Job[] {
  return (Object.keys(jobs) as JobId[]).map((id) => ({ ...jobs[id], bullets: bullets[id] }));
}
