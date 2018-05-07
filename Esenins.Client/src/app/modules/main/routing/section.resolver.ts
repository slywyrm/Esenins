import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { MainService } from '../main.service';
import { DOCUMENT } from '@angular/common';
import { isMobile } from '../../shared/constants/browsers';

@Injectable()
export class SectionResolver implements Resolve<void> {

  constructor(private mainService: MainService,
              @Inject(DOCUMENT) private document: Document) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
    this.mainService.changeSelectedSection(route.url[0].path);
    // if (this.document.scrollingElement.scrollTop !== 0) {
      setTimeout(() => this.document.scrollingElement.scrollTop = 0, 400);
    // }
  }
}
