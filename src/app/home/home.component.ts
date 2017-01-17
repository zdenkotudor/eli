import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';
import { Title } from './title/title.service';

@Component({
  selector: 'home',
  providers: [Title],
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public localState = { value: '' };

  constructor(public appState: AppState, public title: Title) {

  }

  public ngOnInit() {

  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
