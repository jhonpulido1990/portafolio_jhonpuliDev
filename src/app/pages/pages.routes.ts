import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeLayoutsComponent } from './layouts/home-layouts/home-layouts.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { AuthLayoutsComponent } from './layouts/auth-layouts/auth-layouts.component';
import { LoginComponent } from './login/login.component';
import { AdminLayoutsComponent } from './layouts/admin-layouts/admin-layouts.component';
import { BlogAdminComponent } from './admin/blog-admin/blog-admin.component';
import { ExperienceAdminComponent } from './admin/experience-admin/experience-admin.component';
import { ProjectAdminComponent } from './admin/project-admin/project-admin.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutsComponent,
    children: [
      { path: 'home', title: 'home', component: HomeComponent },
      { path: 'about', title: 'about', component: AboutComponent },
      { path: 'projects', title: 'projects', component: ProjectsComponent },
      { path: 'experience', title: 'experience', component: ExperienceComponent },
      { path: 'blog', title: 'blog', component: BlogComponent },
      { path: 'contact', title: 'contact', component: ContactComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutsComponent,
    children: [
      { path: 'login', title: 'login', component: LoginComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutsComponent,
    children: [
      { path: 'blog', title: 'admin-blog', component: BlogAdminComponent },
      { path: 'experience', title: 'admin-experience', component: ExperienceAdminComponent },
      { path: 'projects', title: 'admin-projects', component: ProjectAdminComponent },
      { path: '', redirectTo: 'blog', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
