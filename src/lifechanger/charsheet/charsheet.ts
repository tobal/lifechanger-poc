import {Component} from 'angular2/core';
// import {FORM_DIRECTIVES} from 'angular2/common';
// import {Http} from 'angular2/http';

@Component({
  selector: 'charsheet',
  directives: [],
  providers: [],
  pipes: [],
  styles: [],
  template: require('./charsheet.html')
})
export class CharSheet {
  sheet: Object;
  constructor() {
    this.sheet = {
      charclass: [],
      attributes: [],
      skills: []
    };
  }
}
