import {Component} from 'angular2/core';

import {Node, NodeValue, NodeArray} from './node'

@Component({
    selector: 'charsheet',
    directives: [],
    providers: [],
    pipes: [],
    styles: [],
    template: require('./charsheet.html')
})
export class CharSheet {
    sheet: Array<Node>;
    addFormVisible: boolean;
    title: string;
    type: string;
    nodeValue: number;
    constructor() {
        this.sheet = [];
        this.addFormVisible = false;
    }

    formToggle() {
        this.addFormVisible = !this.addFormVisible;
    }

    addNodeToSheet() {
        var node: Node;
        if(this.type = 'value') {
            node = new NodeValue(this.title, this.nodeValue);
        } else {
            node = new NodeArray(this.title);
        }
        this.sheet.push(node);

        this.title = '';
        this.type = '';
        this.nodeValue = 0;
        this.addFormVisible = false;
    }

    typeIsValue() {
        return this.type === 'value';
    }
}
