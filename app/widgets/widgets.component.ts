import {Component, OnInit} from '@angular/core';
import {StateService} from '../common/state.service';

@Component({
  selector: 'widgets',
  template: require('./widgets.component.html')
})
export class WidgetsComponent implements OnInit{
  title: string = 'Widget Page';
  body:  string = 'This is the widgets page body';
  message: string;

  constructor(public _stateService: StateService) { }

  ngOnInit() {
    this.message = this._stateService.getMessage();
  }

  updateMessage(m: string): void {
    this._stateService.setMessage(m);
  }
}
