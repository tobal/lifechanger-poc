
export class Node {
	title: string;
}

export class NodeArray {
	title: string;
	subnodes: Array<Node>;
	expanded: boolean;

	addSubnode(node) {
		this.subnodes.push(node);
	}
}

export class NodeValue {
	title: string;
	value: number;
}
