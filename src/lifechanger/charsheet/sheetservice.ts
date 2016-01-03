
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

	applyReward(path, value) {
		let subNode: NodeArray;
		subNode = findSubNode(this.sheet, path[0]);
		for (let i = 1; i < path.length - 1; i++) {
			subNode = findSubNode(subNode, path[i]);
		}
		subNode.subvalues.forEach(function(subValue) {
			if(subValue.title === path[path.length - 1]) {
				subValue.value += value;
			}
		})
	}
}

function findSubNode(nodes: NodeArray, title: string): any {
	var foundNode: NodeArray;
	nodes.subnodes.forEach(function(subNode) {
		console.log(subNode.title, title)
		if(subNode.title === title) {
			foundNode = subNode;
		}
	})
	return foundNode;
}
