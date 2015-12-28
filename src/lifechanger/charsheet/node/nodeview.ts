import {Component, View} from 'angular2/core';
import {NodeArray, NodeValue} from './node';

@Component({
    selector: 'node-view',
    inputs: ['nodearray: nodearray']
})
@View({
    template: require('./nodeview.html'),
    directives: [NodeView],
})
export class NodeView {
    nodearray: NodeArray
    expanded: boolean;
    addFormVisible: boolean;
    nodeTitle: string;
    nodeType: string;
    nodeValue: number;
    constructor() {
        this.expanded = false;
        this.addFormVisible = false;
    }

    formToggle() {
        this.addFormVisible = !this.addFormVisible;
    }

    addNodeToArray() {
        if (this.typeIsValue()) {
            let node = new NodeValue(this.nodeTitle, this.nodeValue);
            this.nodearray.subvalues.push(node)
        } else {
            let node = new NodeArray(this.nodeTitle);
            this.nodearray.subnodes.push(node);
        }

        this.nodeTitle = '';
        this.nodeType = '';
        this.nodeValue = 0;
        this.addFormVisible = false;
    }

    typeIsValue() {
        return this.nodeType === 'value';
    }
}
