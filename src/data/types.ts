export interface Contact {
  name: string;
  email: string;
  linkedin: { label: string; url: string };
  github?: { label: string; url: string };
  phone?: { label: string; tel: string };
  location: string;
}

export type InlineText = string | { text: string; href: string };

export type Bullet = string | InlineText[];

export interface Job {
  company: string;
  location: string;
  role: string;
  period: string;
  bullets: Bullet[];
}

export interface Project {
  name: string;
  period: string;
  description: string;
}

export interface EducationEntry {
  institution: string;
  location: string;
  degree: string;
  detail?: string;
  period: string;
}

export interface SkillGroup {
  title: string;
  items: string;
}

export type Section =
  | { kind: "summary"; text: string }
  | { kind: "jobs"; title: string; jobs: Job[] }
  | { kind: "projects"; title: string; projects: Project[] }
  | { kind: "education"; title: string; entries: EducationEntry[] }
  | { kind: "skills"; title: string; groups: SkillGroup[] };

export interface Resume {
  lang: "en" | "es";
  title: string;
  contact: Contact;
  sections: Section[];
}
