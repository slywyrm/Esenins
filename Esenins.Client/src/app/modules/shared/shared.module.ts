import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeDirective } from './directives/fade/fade.directive';
import { SlidesService } from './services/slides/slides.service';
import { HttpClientModule } from '@angular/common/http';
import { ContactsService } from './services/contacts/contacts.service';
import { ProjectsService } from './services/projects/projects.service';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { SectionStaticComponent } from './components/section-static/section-static.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [FadeDirective, CopyrightComponent, SectionStaticComponent],
  exports: [FadeDirective, CopyrightComponent, SectionStaticComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [SlidesService, ContactsService, ProjectsService]
    };
  }
}
