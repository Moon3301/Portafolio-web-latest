import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { PreferTechnologies, Technologies } from "../interfaces/technologies.interface";
import { Project } from "../interfaces/projects.interface";
import { Experience } from "../interfaces/experience.interface";
import { PersonalProject } from "../interfaces/personal-projects.interface";
import { PersonalInfo } from "../interfaces/personal-info.interface";

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    private readonly FIXTURES_PATH = '/fixtures';

    constructor(private http: HttpClient){}

    async getTechnologies(): Promise<Technologies[]> {
        return firstValueFrom(this.http.get<Technologies[]>(`${this.FIXTURES_PATH}/technologies.json`));
    }

    async getPreferTechnologies(): Promise<PreferTechnologies[]> {
        return firstValueFrom(this.http.get<PreferTechnologies[]>(`${this.FIXTURES_PATH}/prefer-technologies.json`));
    }

    async getProjects(): Promise<Project[]> {
        return firstValueFrom(this.http.get<Project[]>(`${this.FIXTURES_PATH}/projects.json`));
    }

    async getPersonalProjects(): Promise<PersonalProject[]> {
        return firstValueFrom(this.http.get<PersonalProject[]>(`${this.FIXTURES_PATH}/personal-projects.json`));
    }

    async getExperience(): Promise<Experience[]> {
        return firstValueFrom(this.http.get<Experience[]>(`${this.FIXTURES_PATH}/experience.json`));
    }

    async getPersonalInfo(): Promise<PersonalInfo> {
        return firstValueFrom(this.http.get<PersonalInfo>(`${this.FIXTURES_PATH}/personal-info.json`));
    }
    
}