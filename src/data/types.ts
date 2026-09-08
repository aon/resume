export interface Contact {
  name: string;
  email: string;
  linkedin: { label: string; url: string };
  phone: { label: string; tel: string };
  location: string;
}

export interface Job {
  company: string;
  location: string;
  role: string;
  period: string;
  bullets: string[];
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
