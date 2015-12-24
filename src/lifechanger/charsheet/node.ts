
export class Node {
	constructor(public title = '') {}
}

export class NodeArray extends Node {
	subnodes: Array<Node>;
	expanded: boolean;
	constructor(public title = '') {
		super(title);
		this.subnodes = [];
		this.expanded = false;
	}
}

export class NodeValue extends Node {
	constructor(public title = '', public value = 0) {
		super(title);
		this.value = value;
	}
}
