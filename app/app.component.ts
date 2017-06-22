import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ExperimentsComponent} from './experiments/experiments.component';
import {WidgetsComponent} from './widgets/widgets.component';

import {StateService} from './common/state.service';
import {ExperimentsService} from './common/experiments.service';

@Component({
  selector: 'app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  providers: [StateService, ExperimentsService]
})
export class AppComponent {}
