import angular from 'angular';

import {techsModule} from './app/techs/index';
import 'angular-ui-router';
import routesConfig from './routes';

import {main} from './app/main';
import {header} from './app/header';
import {footer} from './app/footer';
import {techDetail} from './app/tech-detail/tech-detail';

import './index.scss';

angular
  .module('app', [techsModule, 'ui.router'])
  .config(routesConfig)
  .component('app', main)
  .component('techDetail', techDetail)
  .component('fountainHeader', header)
  .component('fountainFooter', footer);
