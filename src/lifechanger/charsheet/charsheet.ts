import {Component, View} from 'angular2/core';

import {NodeArray} from './node/node'
import {NodeView} from './node/nodeview'

@Component({
    selector: 'charsheet',
    template: require('./charsheet.html'),
    directives: [NodeView]
})
export class CharSheet {
    sheet: NodeArray;
    constructor() {
        this.sheet = new NodeArray('Character');
    }
}
