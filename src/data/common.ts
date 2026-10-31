import type { Contact, EducationEntry } from "./types";

export const contact: Contact = {
  name: "Agustin Aon",
  email: "agustin.aon.s@gmail.com",
  linkedin: { label: "linkedin.com/in/agustin-aon", url: "https://www.linkedin.com/in/agustin-aon" },
  location: "Buenos Aires, Argentina",
};

export const contactWithPhone: Contact = {
  ...contact,
  phone: { label: "+54-9-223-669-0073", tel: "+5492236690073" },
};

export const contactWithGithub: Contact = {
  ...contact,
  github: { label: "github.com/aon", url: "https://github.com/aon" },
};

export const educationEn: EducationEntry = {
  institution: "Universidad Nacional de Mar del Plata",
  location: "Mar del Plata, Argentina",
  degree: "Electronics Engineering",
  period: "2015 – 2021",
};

export const educationEs: EducationEntry = {
  institution: "Universidad Nacional de Mar del Plata",
  location: "Mar del Plata, Argentina",
  degree: "Ingeniería Electrónica",
  detail: "Promedio: 8,53 (con y sin aplazos)",
  period: "2015 – 2021",
};
