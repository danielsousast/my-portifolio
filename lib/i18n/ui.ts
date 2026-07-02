import type { Locale } from "@/types/locale";

export interface UiTranslations {
  aboutMe: string;
  whatIDo: string;
  resume: string;
  education: string;
  experience: string;
  technicalSkills: string;
  skillLevels: Record<"beginner" | "intermediate" | "advanced" | "expert", string>;
  portfolio: string;
  blogs: string;
  contact: string;
  downloadCv: string;
  form: {
    name: string;
    email: string;
    message: string;
    send: string;
    thankYou: string;
    mailtoSubject: string;
  };
  projectModal: {
    project: string;
    client: string;
    languages: string;
    preview: string;
    close: string;
  };
}

const ui: Record<Locale, UiTranslations> = {
  en: {
    aboutMe: "About Me",
    whatIDo: "What I do!",
    resume: "Resume",
    education: "Education",
    experience: "Experience",
    technicalSkills: "Technical Skills",
    skillLevels: {
      beginner: "Beginner",
      intermediate: "Intermediate",
      advanced: "Advanced",
      expert: "Expert",
    },
    portfolio: "Portfolio",
    blogs: "Blogs",
    contact: "Contact",
    downloadCv: "Download CV",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      thankYou: "Thank you for your message! I'll get back to you soon.",
      mailtoSubject: "Portfolio contact from {name}",
    },
    projectModal: {
      project: "Project",
      client: "Client",
      languages: "Languages",
      preview: "Preview",
      close: "Close modal",
    },
  },
  "pt-BR": {
    aboutMe: "Sobre mim",
    whatIDo: "O que eu faço!",
    resume: "Currículo",
    education: "Educação",
    experience: "Experiência",
    technicalSkills: "Habilidades Técnicas",
    skillLevels: {
      beginner: "Iniciante",
      intermediate: "Intermediário",
      advanced: "Avançado",
      expert: "Especialista",
    },
    portfolio: "Portfólio",
    blogs: "Blog",
    contact: "Contato",
    downloadCv: "Baixar CV",
    form: {
      name: "Nome",
      email: "E-mail",
      message: "Mensagem",
      send: "Enviar mensagem",
      thankYou: "Obrigado pela mensagem! Retornarei em breve.",
      mailtoSubject: "Contato do portfólio de {name}",
    },
    projectModal: {
      project: "Projeto",
      client: "Cliente",
      languages: "Tecnologias",
      preview: "Visualizar",
      close: "Fechar modal",
    },
  },
};

export function getUiTranslations(locale: Locale): UiTranslations {
  return ui[locale];
}
