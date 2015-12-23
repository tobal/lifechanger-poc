import {Component} from 'angular2/core';

import {Node} from './node'

@Component({
  selector: 'charsheet',
  directives: [],
  providers: [],
  pipes: [],
  styles: [],
  template: require('./charsheet.html')
})
export class CharSheet {
  sheet: Array<Node>;
  constructor() {
    this.sheet = [];
  }
}
