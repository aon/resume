import { contactWithGithub, educationEn } from "./common";
import { experience, scoutUrl } from "./experience";
import type { Resume } from "./types";

export const crypto: Resume = {
  lang: "en",
  title: "Agustin Aon — Resume (Crypto & Fintech)",
  contact: contactWithGithub,
  sections: [
    {
      kind: "summary",
      text: "Engineer with 4+ years in blockchain and fintech: smart-contract security tooling, multi-party signing and governance, real-time ledger reconciliation.",
    },
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
          "Built the product end to end using TanStack Start, Cloudflare Workers, and self-hosted browser automation.",
        ],
        moonsong: [
          "Led development of the ZKsync protocol governance platform, replacing CLI workflows for 15+ stakeholders with a web UI for multi-party approvals and on-chain signing.",
          "Delivered an on-chain enterprise permissioning system on ZKsync that processed 10,000+ transactions, from authorization services to user-facing dashboards.",
          "Built passkey account recovery for an authentication product, from the UI to backend orchestration.",
        ],
        coinfabrik: [
          [
            "Led a small team building ",
            { text: "Scout", href: scoutUrl },
            ", an open-source Rust static analyzer that detects 23+ classes of vulnerabilities in ink! smart contracts.",
          ],
          "Led migration of a cryptographic library to WebAssembly, enabling its use in web and mobile products.",
        ],
        duollar: [
          "Built 10+ fintech microservices for payments and accounts, plus a real-time ledger reconciliation engine.",
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
        { title: "Core", items: "TypeScript, React, React Native, Rust, Node.js, Passkeys/WebAuthn" },
        { title: "Web3", items: "ZKsync, ink!, WebAssembly, multi-party signing" },
        { title: "Backend", items: "Go, Python, NestJS, PostgreSQL, Prisma, gRPC, REST, GraphQL" },
        { title: "Frontend & Infrastructure", items: "Next.js, Tailwind, AWS, Cloudflare Workers, Docker" },
      ],
    },
  ],
};
