
export class Node {
	constructor(public title = '') {}
}

export class NodeArray extends Node {
	subnodes: Array<NodeArray>;
	subvalues: Array<NodeValue>;
	constructor(public title = '') {
		super(title);
		this.subnodes = [];
		this.subvalues = [];
	}
}

export class NodeValue extends Node {
	constructor(public title = '', public value = 0) {
		super(title);
		this.value = value;
	}
}
