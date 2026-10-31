import { contactWithGithub, educationEn } from "./common";
import { experience, scoutUrl } from "./experience";
import type { Resume } from "./types";

export const backend: Resume = {
  lang: "en",
  title: "Agustin Aon — Resume (Backend)",
  contact: contactWithGithub,
  sections: [
    {
      kind: "summary",
      text: "Backend engineer building distributed services, payment ledgers and authorization systems in TypeScript, Go and Rust.",
    },
    {
      kind: "jobs",
      title: "Experience",
      jobs: experience({
        profound: [
          "Developing the ads product, ingesting campaign data across ad platforms to drive AI recommendations.",
          "Building agents, MCP integrations, and LLM features for a platform used by 25,000+ marketers.",
        ],
        afippi: [
          "Built a B2B SaaS serving 100+ accountants on Cloudflare Workers, with queue-based async processing.",
          "Ran self-hosted browser automation to sync client data from ARCA, Argentina's tax authority.",
          "Shipped a public API and an MCP server for programmatic and AI agent access.",
        ],
        moonsong: [
          "Built Go authorization services for enterprise permissioning that processed 10,000+ transactions.",
          "Built the backend orchestration for account recovery in a passkey-based authentication product.",
          "Led a ZKsync governance platform that moved 15+ stakeholders from CLI workflows to multi-party approvals.",
        ],
        coinfabrik: [
          [
            "Led a small team building ",
            { text: "Scout", href: scoutUrl },
            ", an open-source Rust analyzer for 23+ classes of ink! smart contract issues.",
          ],
          "Led migration of a cryptographic library to WebAssembly so it could run across browsers and platforms.",
        ],
        duollar: [
          "Built and maintained 10+ microservices in Go for payments, accounts, and transactions.",
          "Built an engine that reconciled internal ledgers with external payment activity in real time.",
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
        { title: "Languages", items: "TypeScript, Go, Rust, Python, C++" },
        {
          title: "Backend",
          items: "Node.js, NestJS, Fastify, Express, PostgreSQL, Prisma, gRPC, REST, GraphQL, WebSockets",
        },
        { title: "Infrastructure", items: "AWS, Cloudflare Workers, Docker, Terraform, GitHub Actions" },
        { title: "Queues & Observability", items: "SQS, BullMQ, Sentry, Datadog" },
        { title: "AI", items: "LLM features, agents, MCP servers" },
      ],
    },
  ],
};
