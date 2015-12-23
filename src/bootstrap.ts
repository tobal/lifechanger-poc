import {bootstrap} from 'angular2/platform/browser';

import {LifechangerApp} from './lifechanger/app';

function main() {
	return bootstrap(LifechangerApp, [])
  	.catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);
