import { Inject, Injectable } from '@angular/core';
import { Sections } from '../shared/models/sections.model';
import { Section } from '../shared/models/section.model';
import * as _ from 'lodash';
import { map, filter } from 'rxjs/operators';
import { NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';

export interface TitleInfo {
  title?: string;
  color?: string;
}

@Injectable()
export class MainService {
  private selectedSection: BehaviorSubject<Section>;
  private menuShown = new BehaviorSubject<boolean>(false);
  private overrideTitleInfo = new BehaviorSubject<TitleInfo>({});
  sections: Sections = {
    mainPage: {
      name: 'design studio',
      russianName: 'главная',
      textColor: 'white',
      menuImgSrc: '/assets/pages/menu-item1.jpg',
      needsHeight: true
    },
    portfolio: {
      name: 'portfolio',
      russianName: 'портфолио',
      textColor: 'black',
      menuImgSrc: '/assets/pages/menu-item1.jpg'
    },
    projects: {
      name: 'projects',
      russianName: 'проекты',
      textColor: 'black',
      menuImgSrc: '/assets/pages/menu-item1.jpg'
    },
    blog: {
      name: 'blog',
      russianName: 'блог',
      textColor: 'black',
      menuImgSrc: '/assets/pages/menu-item1.jpg'
    },
    contacts: {
      name: 'contacts',
      russianName: 'контакты',
      textColor: 'black',
      menuImgSrc: '/assets/pages/menu-item1.jpg',
      needsHeight: true
    }
  };

  menuShown$ = this.menuShown.asObservable();
  titleInfo$: Observable<TitleInfo>;
  scrollDirection = 'down';

  get selectedSection$(): Observable<Section> {
    return this.selectedSection.asObservable();
  }

  constructor(router: Router) {
    router.events.pipe(filter(e => e instanceof NavigationStart))
      .subscribe((e: NavigationStart) => {
        const prevIndex = Object.keys(this.sections).indexOf(this.selectedSection.getValue().name);
        const nextIndex = Object.keys(this.sections).indexOf(e.url.split('/').pop());
        this.scrollDirection = prevIndex > nextIndex ? 'up' : 'down';
      });
    this.selectedSection = new BehaviorSubject<Section>(this.sections['mainPage']);
    this.titleInfo$ = combineLatest(this.selectedSection.asObservable(), this.overrideTitleInfo.asObservable(), this.menuShown$).pipe(
      map(([section, override, menuShown]) => {
        if (menuShown) {
          return { title: 'menu', color: 'white' };
        }
        return {
          title: override.title ? override.title : section.name,
          color: override.color ? override.color : section.textColor
        };
      })
    );
  }

  toggleMenu(toggle?: boolean): Observable<boolean> {
    this.menuShown.next(toggle != null ? toggle : !this.menuShown.getValue());
    return this.menuShown$;
  }

  isMenuShown(): boolean {
    return this.menuShown.getValue();
  }

  changeSelectedSection(id: string): void {
    if (this.sections[id]) {
      this.selectedSection.next(this.sections[id]);
    }
  }

  overrideTitle(data: TitleInfo) {
    this.overrideTitleInfo.next(data);
  }

  findSectionByIndexDelta(delta: number): string {
    const keys = Object.keys(this.sections);
    const oldIndex = keys.findIndex(key => this.sections[key] === this.selectedSection.getValue());
    if (oldIndex + delta >= 0 && oldIndex + delta < keys.length) {
      return keys[oldIndex + delta];
    }
    return keys[oldIndex];
  }

  currentSectionId(): string {
    return _.findKey(this.sections, this.selectedSection.getValue());
  }

  getScrollDir(next: string) {
    const prevIndex = Object.keys(this.sections).indexOf(this.selectedSection.getValue().name);
    const nextIndex = Object.keys(this.sections).indexOf(next);
    return prevIndex > nextIndex ? 'up' : 'down';
  }

}
