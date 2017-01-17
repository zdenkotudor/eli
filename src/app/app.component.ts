import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppState } from './app.service';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css'],
  template: `
    <nav>
      <a [routerLink]="['./']" routerLinkActive="active">Index</a>
      <a [routerLink]="['./home']" routerLinkActive="active">Home</a>
      <a [routerLink]="['./about']" routerLinkActive="active">About</a>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent implements OnInit {
  constructor(public appState: AppState) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }
}
