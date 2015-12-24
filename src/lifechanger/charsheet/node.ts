
export class Node {
	title: string;
	value: number;
	subnodes: Array<Node>;
	expanded: boolean;

	addSubnode(node) {
		this.subnodes.push(node);
	}
}
