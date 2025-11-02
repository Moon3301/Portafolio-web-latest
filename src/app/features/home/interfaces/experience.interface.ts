export interface Experience {
    title: string;
    company: string;
    date: string;
    description?: DescriptionExperience[];
}

export interface DescriptionExperience {
    id: number;
    description: string;
}
