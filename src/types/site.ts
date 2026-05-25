export interface NavItem {
  id: string;
  label: string;
}

export interface HeroProof {
  title: string;
  text: string;
}

export interface AudienceSegment {
  id: string;
  title: string;
  description: string;
  points: string[];
}

export interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  materials: string;
  tasks: string;
}

export type ProjectCategory =
  | "private"
  | "horeca"
  | "retail"
  | "details";

export type ProjectSpan = "feature" | "portrait" | "landscape" | "square";

export interface ProjectItem {
  id: string;
  category: ProjectCategory;
  title: string;
  type: string;
  task: string;
  materials: string;
  scope: string;
  result: string;
  image: string;
  alt: string;
  span: ProjectSpan;
}

export interface ProjectFilter {
  id: "all" | ProjectCategory;
  label: string;
}

export interface MaterialItem {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  checks: string[];
  image: string;
  alt: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

export interface TrustItem {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactOption {
  value: string;
  label: string;
}

export interface StudioContacts {
  email: string;
  phone: string;
  location: string;
}
