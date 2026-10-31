import { backend } from "./backend";
import { crypto } from "./crypto";
import { dev } from "./dev";
import { education } from "./education";
import { fullstack } from "./fullstack";
import type { Resume } from "./types";

export const resumes: Record<string, Resume> = { dev, education, fullstack, backend, crypto };
