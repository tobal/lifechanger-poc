import {bootstrap} from 'angular2/platform/browser';

import {LifechangerApp} from './lifechanger/app';
import {SheetService} from './lifechanger/charsheet/sheetservice'

function main() {
	return bootstrap(LifechangerApp, [SheetService])
  	.catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);
