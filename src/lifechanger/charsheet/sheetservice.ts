
import {NodeArray} from './node/node';

export class SheetService {
	sheet: NodeArray;
	constructor() {
        this.sheet = new NodeArray('Character');
	}

	getSheet() {
		return this.sheet;
	}

	setSheet(sheet: NodeArray) {
		this.sheet = sheet;
	}
}