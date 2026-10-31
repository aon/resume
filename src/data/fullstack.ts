import { contactWithGithub, educationEn } from "./common";
import { experience, scoutUrl } from "./experience";
import type { Resume } from "./types";

export const fullstack: Resume = {
  lang: "en",
  title: "Agustin Aon — Resume (Full Stack)",
  contact: contactWithGithub,
  sections: [
    {
      kind: "summary",
      text: "Full-stack engineer (TypeScript, React, Node.js) who takes products from 0 to 1. Founded a B2B SaaS used by 100+ accountants; now building AI-powered ad tooling at Profound.",
    },
    {
      kind: "jobs",
      title: "Experience",
      jobs: experience({
        profound: [
          "Developing the ads product, a one-stop shop that ingests campaigns across ad platforms, suggests AI-driven improvements, and generates ad images and videos.",
          "Building agents, MCP integrations, and LLM features for a platform used by 25,000+ marketers.",
        ],
        afippi: [
          "Built end to end a B2B SaaS serving 100+ accountants with TanStack Start and Cloudflare Workers.",
          "Integrated ARCA, Argentina's tax authority, via self-hosted browser automation to sync client data.",
          "Shipped a public API and an MCP server, and led marketing, sales, and team growth.",
        ],
        moonsong: [
          "Led development of a ZKsync governance platform that replaced CLI workflows for 15+ stakeholders with a web UI for multi-party approvals and signing.",
          "Delivered enterprise permissioning for 10,000+ transactions, spanning authorization and dashboards.",
          "Built passkey account recovery for an authentication product, from the UI to backend orchestration.",
        ],
        coinfabrik: [
          [
            "Led a small team building ",
            { text: "Scout", href: scoutUrl },
            ", an open-source Rust tool that detects 23+ classes of security vulnerabilities in ink! smart contracts.",
          ],
          "Led migration of a cryptographic library to WebAssembly, enabling its use in web and mobile products.",
        ],
        duollar: [
          "Built 10+ payment and account microservices, including a real-time ledger reconciliation engine.",
          "Delivered core fintech flows across web and mobile with React and React Native.",
        ],
        marvell: ["Engineered C++ drivers for hardware-software integration and designed digital blocks in Verilog."],
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
        {
          title: "Core",
          items: "TypeScript, React, Next.js, Node.js, NestJS, TanStack Start, PostgreSQL, Prisma, Tailwind",
        },
        { title: "Also", items: "React Native, Vue.js, Python, Go, GraphQL, REST, WebSockets" },
        { title: "Infrastructure", items: "Cloudflare Workers, AWS, Docker, GitHub Actions" },
        { title: "AI", items: "LLM features, agents, MCP servers" },
        { title: "Testing", items: "Vitest, Jest, Playwright, Cypress" },
      ],
    },
  ],
};
