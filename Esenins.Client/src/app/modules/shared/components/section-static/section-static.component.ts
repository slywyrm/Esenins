import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'es-section-static',
  templateUrl: './section-static.component.html',
  styleUrls: ['./section-static.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionStaticComponent implements OnInit, OnDestroy {
  private _staticWhen: Observable<boolean>;
  private staticWhenSubsciption: Subscription;
  isStatic: boolean;

  @Input() set staticWhen(value: Observable<boolean> | boolean) {
    if (value instanceof Observable) {
      this._staticWhen = value;
    } else {
      this.isStatic = value;
    }
  }

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    if (this._staticWhen) {
      this.staticWhenSubsciption = this._staticWhen.subscribe(isStatic => {
        this.isStatic = isStatic;
        this.cdr.detectChanges();
      });
    }
  }

  ngOnDestroy() {
    this.staticWhenSubsciption.unsubscribe();
  }

}
