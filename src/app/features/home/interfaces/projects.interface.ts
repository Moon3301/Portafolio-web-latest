export interface Project {
    id: number;
    name: string;
    description: string;
    image: string;
    link: string;
    technologies: string[];
    detail: ProjectDetail;
    github: string;
    linkedin: string;
}

export interface ProjectHero {
    name: string;
    description: string;
    image: string;
}

export interface ProjectDetail {
    hero: ProjectHero;
    overview: ProjectOverview[];
    gallery: string[];
    technicalDeep: ProjectTechnicalDeep[];
}

export interface ProjectOverview {
    title: string;
    description: string;
}

export interface ProjectTechnicalDeep {
    title: string;
    description: string;
}

