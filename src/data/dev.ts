import { contact, educationEn } from "./common";
import type { Resume } from "./types";

export const dev: Resume = {
  lang: "en",
  title: "Agustin Aon — Resume",
  contact,
  sections: [
    {
      kind: "jobs",
      title: "Experience",
      jobs: [
        {
          company: "Afippi",
          location: "Buenos Aires, Argentina",
          role: "Founder & Full Stack Engineer",
          period: "Jul 2025 – Present",
          bullets: [
            "Founded Afippi, a B2B SaaS platform serving 100+ accountants with ARCA data synchronization and business analytics.",
            "Built the product end to end using TanStack Start, Cloudflare Workers, and self-hosted browser automation infrastructure.",
            "Led marketing, sales, and team growth alongside product development.",
          ],
        },
        {
          company: "Moonsong Labs",
          location: "Remote, USA",
          role: "Senior Full Stack Engineer",
          period: "Oct 2023 – Sep 2026",
          bullets: [
            "Led development of a governance platform that replaced CLI workflows for 15+ stakeholders with a web UI for multi-party approvals and signing.",
            "Delivered an enterprise permissioning system that processed 10,000+ transactions, spanning backend authorization services and user-facing dashboards.",
            "Built the account recovery flow for a passkey-based authentication product, including the recovery UI and backend orchestration.",
          ],
        },
        {
          company: "CoinFabrik",
          location: "Buenos Aires, Argentina",
          role: "Technical Lead",
          period: "Sep 2022 – Oct 2023",
          bullets: [
            "Co-developed Scout, an open-source static analysis tool written in Rust that detects 23+ classes of security issues in application code.",
            "Led migration of a cryptographic library to WebAssembly so it could run across browsers and platforms, unblocking integration into web and mobile products.",
            "Designed a prototype asset management platform with role-based delegated authentication, including admin and user-facing interfaces.",
          ],
        },
        {
          company: "Duollar",
          location: "Buenos Aires, Argentina",
          role: "Full Stack Engineer",
          period: "Apr 2022 – Oct 2022",
          bullets: [
            "Built and maintained 10+ microservices for payments, accounts, and transactions, including an engine that reconciled internal ledgers with external payment activity in real time.",
            "Delivered core fintech flows across web and mobile with React and React Native.",
          ],
        },
        {
          company: "Marvell Technology",
          location: "Cordoba, Argentina",
          role: "Digital Design Engineer",
          period: "Apr 2021 – Apr 2022",
          bullets: [
            "Engineered C++ drivers for hardware-software integration and designed digital blocks in Verilog.",
            "Built internal tooling adopted team-wide to automate repetitive engineering workflows.",
          ],
        },
      ],
    },
    {
      kind: "education",
      title: "Education",
      entries: [educationEn],
    },
    {
      kind: "skills",
      title: "Skills",
      groups: [
        { title: "Languages", items: "JavaScript, TypeScript, Python, Go, Rust, C, C++" },
        {
          title: "Frontend & Mobile",
          items: "React, Next.js, React Native, Tanstack Start, Vue.js, Nuxt.js, HTML, CSS, Tailwind",
        },
        {
          title: "Backend & Infrastructure",
          items: "Node.js, Express, Nest.js, Fastify, AWS, Cloudflare Workers, Docker, Prisma, PostgreSQL, WebSockets, GraphQL, REST, gRPC",
        },
        {
          title: "Testing & CI/CD",
          items: "Jest, Vitest, Playwright, Cypress, GitHub Actions, GitLab CI",
        },
        {
          title: "Auth",
          items: "Clerk, Auth0, NextAuth, Passkeys/WebAuthn, OAuth2, JWT, in-house solutions",
        },
      ],
    },
  ],
};
