/** What a laptop's screen shows on a project's page: a screenshot, a terminal running the project's own commands,
 *  or a spreadsheet drawn in the page (an illustration, for a project with no screen of its own). */
export type MacScreen =
  | { kind: "image"; src: string; alt: string }
  | { kind: "terminal"; title: string; prompt: string; lines: { cmd: string; out: string }[] }
  | { kind: "spreadsheet" };

export interface PhoneScreen {
  src: string;
  alt: string;
  statusBar?: boolean; // a web page captured without the phone's status bar: the frame draws one above it
}

export interface Project {
  id: string;
  slug: string; // its page: /work/<slug>
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
  featured: boolean;
  year?: string;
  role?: string;
  highlights?: string[];
  mac?: MacScreen;
  phones?: PhoneScreen[];
}

export interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  category:
    | "Frontend"
    | "Backend"
    | "Mobile"
    | "Database"
    | "Cloud"
    | "Tools"
    | "CMS"
    | "Game Dev"
    | "DevOps";
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
  current?: boolean;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface Certificate {
  id: string;
  name: string;
  link?: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  description?: string;
  skills: string[];
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  website?: string;
}
