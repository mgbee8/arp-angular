'use strict';
const angular = require('angular');
import {UtilService} from './util.service';

export default angular.module('arpAngularApp.util', [])
  .factory('Util', UtilService)
  .name;
