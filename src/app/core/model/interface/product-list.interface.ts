export interface ProjectDto {
  id?: string;
  title: string;
  description: string;
  technologies: string[];
  role: string;
  imageUrl: string;
  demoLink?: string;
  repoLink?: string;
  videoLink?: string;
}
