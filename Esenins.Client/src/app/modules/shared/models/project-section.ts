import { Project } from './project';

export interface ProjectSection {
  id: string;
  name: string;
  projects: Project[];
}

export interface ProjectsBySections {
 [id: string]: ProjectSection;
}
