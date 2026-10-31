import { contact, educationEn } from "./common";
import { experience } from "./experience";
import type { Resume } from "./types";

export const dev: Resume = {
  lang: "en",
  title: "Agustin Aon — Resume",
  contact,
  sections: [
    {
      kind: "jobs",
      title: "Experience",
      jobs: experience({
        profound: [
          "Building an AI search marketing platform used by 25,000+ marketers across 90+ countries.",
          "Developing the ads product, a one-stop shop that ingests campaigns across ad platforms, suggests AI-driven improvements, and generates ad images and videos.",
        ],
        afippi: [
          "Founded a B2B SaaS platform serving 100+ accountants with ARCA data sync and business analytics.",
          "Built the product end to end using TanStack Start, Cloudflare Workers, and self-hosted browser automation infrastructure.",
          "Led marketing, sales, and team growth alongside product development.",
        ],
        moonsong: [
          "Led development of a governance platform that replaced CLI workflows for 15+ stakeholders with a web UI for multi-party approvals and signing.",
          "Delivered an enterprise permissioning system that processed 10,000+ transactions, spanning backend authorization services and user-facing dashboards.",
          "Built the account recovery flow for a passkey-based authentication product, including the recovery UI and backend orchestration.",
        ],
        coinfabrik: [
          "Led a team building Scout, an open-source Rust tool that detects 23+ classes of security issues.",
          "Led migration of a cryptographic library to WebAssembly, enabling its use in web and mobile products.",
        ],
        duollar: [
          "Built and maintained 10+ microservices for payments, accounts, and transactions, including an engine that reconciled internal ledgers with external payment activity in real time.",
          "Delivered core fintech flows across web and mobile with React and React Native.",
        ],
        marvell: [
          "Engineered C++ drivers for hardware-software integration and designed digital blocks in Verilog.",
        ],
      }),
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
