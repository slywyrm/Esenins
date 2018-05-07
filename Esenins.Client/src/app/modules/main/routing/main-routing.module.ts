import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { MainComponent } from '../main.component';
import { PortfolioItemResolver } from './portfolio-item.resolver';
import { PortfolioItemComponent } from '../components/portfolio/portfolio-item/portfolio-item.component';
import { PortfolioItemCanDeactivateGuard } from './portfolio-item-can-deactivate.guard';
import { MainPageComponent } from '../components/main-page/main-page.component';
import { PortfolioComponent } from '../components/portfolio/portfolio.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { ContactsComponent } from '../components/contacts/contacts.component';
import { SectionResolver } from './section.resolver';
import { BlogComponent } from '../components/blog/blog.component';

const portfolioItemRoute: Route = {
  path: ':projectId',
  component: PortfolioItemComponent,
  resolve: {
    project: PortfolioItemResolver
  },
  canDeactivate: [PortfolioItemCanDeactivateGuard]
};

const sectionResolver = { section: SectionResolver };

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'mainPage',
        component: MainPageComponent,
        resolve: sectionResolver
      },
      {
        path: 'portfolio',
        component: PortfolioComponent,
        children: [portfolioItemRoute],
        resolve: sectionResolver,
      },
      {
        path: 'blog',
        component: BlogComponent,
        resolve: sectionResolver
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        children: [portfolioItemRoute],
        resolve: sectionResolver
      },
      {
        path: 'contacts',
        component: ContactsComponent,
        resolve: sectionResolver
      },
      { path: '', redirectTo: 'mainPage', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [PortfolioItemResolver, PortfolioItemCanDeactivateGuard, SectionResolver]
})
export class MainRoutingModule { }
