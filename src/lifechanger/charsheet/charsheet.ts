
import {Component, View} from 'angular2/core';

import {NodeArray} from './node/node';
import {NodeView} from './node/nodeview';
import {AddQuest} from './quest/addquest';
import {Quest} from './quest/quest';

// import {readJson, writeJson} from 'typings/dist/utils/fs';

@Component({
    selector: 'charsheet',
    template: require('./charsheet.html'),
    directives: [NodeView, AddQuest]
})
export class CharSheet {
    sheet: NodeArray;
    questarray: Array<Quest>;
    content: string;
    constructor() {
        this.sheet = new NodeArray('Character');
        this.questarray = [];
    }

    displayContent() {
        this.content = JSON.stringify(this.sheet);
    }

    loadContent() {
        this.sheet = JSON.parse(this.content);
    }

    // saveSheet() {
    //     // writeJson('charsheet', this.sheet);
    //     let fs = require('graceful-fs');
    //     let jsonString = JSON.stringify(this.sheet);
    //     fs.writeFile('charsheet', jsonString, function(err) {
    //         if (err) throw err;
    //     });
    // }

    // loadSheet() {
    //     // this.sheet = readJson('charsheet');
    //     let fs = require('fs');
    //     fs.readFile('charsheet', 'utf8', function(err, data) {
    //         if (err) throw err;
    //         this.sheet = JSON.parse(data);
    //     });
    // }
}
