import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PortfolioItemComponent } from '../components/portfolio/portfolio-item/portfolio-item.component';
import { Observable } from 'rxjs';

@Injectable()
export class PortfolioItemCanDeactivateGuard implements CanDeactivate<PortfolioItemComponent> {
  canDeactivate(
    component: PortfolioItemComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate();
  }
}
