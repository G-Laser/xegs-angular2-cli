import {Component} from '@angular/core';
import {StateService} from '../common/state.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html'
})

export class HomeComponent {
  /* title: string = 'Home Page';
  body:  string = 'This is the about home body';
  message: string;

 constructor(private _stateService: StateService) { }

  ngOnInit() {
    this.message = this._stateService.getMessage();
  }

  updateMessage(m: string): void {
    this._stateService.setMessage(m);
  } */
}
