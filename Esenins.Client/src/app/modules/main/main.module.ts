import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './routing/main-routing.module';
import { MainComponent } from './main.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContentComponent } from './components/content/content.component';
import { SharedModule } from '../shared/shared.module';
import { MainPageComponent } from './components/content/main-page/main-page.component';
import { MainPageSlideComponent } from './components/content/main-page/main-page-slide/main-page-slide.component';
import { MainPageSliderControlsComponent } from './components/content/main-page/main-page-slider-controls/main-page-slider-controls.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { MainService } from './main.service';
import { SectionDirective } from './directives/section/section.directive';
import { PortfolioComponent } from './components/content/portfolio/portfolio.component';
import { ContactsComponent } from './components/content/contacts/contacts.component';
import { FormsModule } from '@angular/forms';
import { ContactsSentComponent } from './components/content/contacts/contacts-sent/contacts-sent.component';
import { PortfolioTileComponent } from './components/content/portfolio/portfolio-tile/portfolio-tile.component';
import { PortfolioItemComponent } from './components/content/portfolio/portfolio-item/portfolio-item.component';
import { BlogComponent } from './components/content/blog/blog.component';
import { ProjectsComponent } from './components/content/projects/projects.component';
import { ProjectComponent } from './components/content/projects/project/project.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule,
    SharedModule.forRoot(),
    // NgxPageScrollModule
  ],
  declarations: [
    MainComponent,
    MenuComponent,
    ContentComponent,
    SectionDirective,
    MainPageComponent,
    MainPageSlideComponent,
    MainPageSliderControlsComponent,
    SectionTitleComponent,
    SectionDirective,
    PortfolioComponent,
    ContactsComponent,
    ContactsSentComponent,
    PortfolioTileComponent,
    PortfolioItemComponent,
    BlogComponent,
    ProjectsComponent,
    ProjectComponent
  ],
  providers: [
    MainService
  ]
})
export class MainModule { }
