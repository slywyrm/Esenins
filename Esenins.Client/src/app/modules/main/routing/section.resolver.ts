import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { MainService } from '../main.service';

@Injectable()
export class SectionResolver implements Resolve<void> {

  constructor(private mainService: MainService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
    this.mainService.changeSelectedSection(route.url[0].path);
    // this.mainService.toggleMenu();
  }
}
