import {Component} from 'angular2/core';

import {Node} from './node'

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
        let node = new Node();
        node.title = this.title;
        node.value = this.nodeValue;
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
