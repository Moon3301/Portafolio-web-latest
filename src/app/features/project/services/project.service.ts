import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { Project } from "../../home/interfaces/projects.interface";
import { PersonalProject } from "../../home/interfaces/personal-projects.interface";

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    private projects: Project[] = [];
    private personalProjects: PersonalProject[] = [];

    private readonly FIXTURES_PATH = '/fixtures';

    constructor(private http: HttpClient){}

    async loadProjectsFromFixtures(): Promise<void> {
        this.projects = await firstValueFrom(this.http.get<Project[]>(`${this.FIXTURES_PATH}/projects.json`));
    }

    async loadPersonalProjectsFromFixtures(): Promise<void> {
        this.personalProjects = await firstValueFrom(this.http.get<PersonalProject[]>(`${this.FIXTURES_PATH}/personal-projects.json`));
    }

    get getProjects(): Project[] {
        return this.projects;
    }

    get getPersonalProjects(): PersonalProject[] {
        return this.personalProjects;
    }

    findProjectById( projectId: number): Project | undefined {
        return this.projects.find(project => project.id === projectId);
    }

    
}