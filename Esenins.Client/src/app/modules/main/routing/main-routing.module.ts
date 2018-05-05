import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { MainComponent } from '../main.component';
import { ContentComponent } from '../components/content/content.component';
import { PortfolioItemResolver } from './portfolio-item.resolver';
import { PortfolioItemComponent } from '../components/content/portfolio/portfolio-item/portfolio-item.component';
import { PortfolioItemCanDeactivateGuard } from './portfolio-item-can-deactivate.guard';
import { MainPageComponent } from '../components/content/main-page/main-page.component';
import { PortfolioComponent } from '../components/content/portfolio/portfolio.component';
import { ProjectsComponent } from '../components/content/projects/projects.component';
import { ContactsComponent } from '../components/content/contacts/contacts.component';
import { SectionResolver } from './section.resolver';

const portfolioItemRoute: Route = {
  path: ':projectId',
  component: PortfolioItemComponent,
  resolve: {
    project: PortfolioItemResolver
  },
  canDeactivate: [PortfolioItemCanDeactivateGuard]
};

const defaultRoute: Route = { path: '', redirectTo: 'mainPage', pathMatch: 'full' };

const desktopRoutes: Routes = [
  {
    path: ':sectionId',
    component: ContentComponent,
    children: [portfolioItemRoute]
  },
  defaultRoute
];

const mobileRoutes: Routes = [
  {
    path: 'mainPage',
    component: MainPageComponent,
    resolve: {
      section: SectionResolver
    }
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    children: [portfolioItemRoute],
    resolve: {
      section: SectionResolver
    },
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    children: [portfolioItemRoute],
    resolve: {
      section: SectionResolver
    }
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    resolve: {
      section: SectionResolver
    }
  },
  defaultRoute
];

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: mobileRoutes // isMobile ? mobileRoutes : desktopRoutes
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [PortfolioItemResolver, PortfolioItemCanDeactivateGuard, SectionResolver]
})
export class MainRoutingModule { }
