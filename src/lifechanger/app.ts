
import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';

import {CharSheet} from './charsheet/charsheet';

@Component({
	selector: 'lifechanger-app',
	providers: [],
	directives: [CharSheet],
	pipes: [],
	styles: [],
	template: require('./app.html')
})
export class LifechangerApp {
	constructor() { }
}
