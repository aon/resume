import { contact, educationEs } from "./common";
import type { Resume } from "./types";

export const education: Resume = {
  lang: "es",
  title: "Agustin Aon — CV Docente",
  contact,
  sections: [
    {
      kind: "jobs",
      title: "Experiencia Docente",
      jobs: [
        {
          company: "Universidad Nacional de Mar del Plata",
          location: "Mar del Plata, Argentina",
          role: "Ayudante de Primera — Estadística Básica",
          period: "2022 – 2025",
          bullets: [
            "Dicté clases prácticas semanales de Estadística Básica para comisiones de estudiantes de grado.",
            "Colaboré con el equipo de cátedra en la elaboración de guías de ejercicios y material de práctica.",
          ],
        },
        {
          company: "Universidad Nacional de Mar del Plata",
          location: "Mar del Plata, Argentina",
          role: "Ayudante de Segunda — Estadística Básica",
          period: "2017 – 2021",
          bullets: [
            "Asistí en las clases prácticas y atendí clases de consulta previas a los exámenes.",
            "Corregí parciales y trabajos prácticos junto al equipo de cátedra.",
          ],
        },
        {
          company: "Universidad Nacional de Mar del Plata",
          location: "Mar del Plata, Argentina",
          role: "Ayudante Ad Honorem — Física Básica",
          period: "2016 – 2018",
          bullets: [
            "Asistí en el dictado de clases prácticas y en la atención de consultas de estudiantes de primer año.",
          ],
        },
        {
          company: "IPE — Instituto de Apoyo Académico",
          location: "Mar del Plata, Argentina",
          role: "Profesor Particular",
          period: "2016 – 2018",
          bullets: [
            "Di clases de apoyo de Matemática y Física a estudiantes secundarios y universitarios.",
          ],
        },
        {
          company: "Clases Particulares Independientes",
          location: "Mar del Plata, Argentina",
          role: "Profesor de Matemática y Física",
          period: "2016 – 2020",
          bullets: [
            "Di clases individuales y grupales, adaptando la preparación a los objetivos de cada estudiante.",
          ],
        },
      ],
    },
    {
      kind: "jobs",
      title: "Experiencia Profesional",
      jobs: [
        {
          company: "Afippi",
          location: "Buenos Aires, Argentina",
          role: "Fundador & Full Stack Engineer",
          period: "Jul 2025 – Presente",
          bullets: [
            "Fundé Afippi, una plataforma SaaS B2B que asiste a más de 100 contadores con sincronización de datos de ARCA y analítica de negocio.",
          ],
        },
        {
          company: "Moonsong Labs",
          location: "Boston, EE. UU.",
          role: "Senior Full Stack Engineer",
          period: "Oct 2023 – Sep 2026",
          bullets: [
            "Lideré el desarrollo de extremo a extremo de la plataforma de gobernanza del protocolo ZKsync y de sistemas de permisos empresariales.",
          ],
        },
        {
          company: "CoinFabrik Web3 Solutions",
          location: "Buenos Aires, Argentina",
          role: "Technical Lead",
          period: "Sep 2022 – Oct 2023",
          bullets: [
            "Lideré un equipo de desarrollo construyendo herramientas de análisis estático y librerías criptográficas.",
          ],
        },
        {
          company: "Duollar",
          location: "Buenos Aires, Argentina",
          role: "Full Stack Engineer",
          period: "Abr 2022 – Oct 2022",
          bullets: [
            "Construí microservicios de pagos, cuentas y transacciones, y los flujos web y mobile del producto.",
          ],
        },
        {
          company: "Marvell Technology",
          location: "Córdoba, Argentina",
          role: "Digital Design Engineer",
          period: "Abr 2021 – Abr 2022",
          bullets: [
            "Desarrollé drivers en C++ y bloques de diseño digital en Verilog para integración hardware-software.",
          ],
        },
      ],
    },
    {
      kind: "education",
      title: "Educación",
      entries: [educationEs],
    },
  ],
};
