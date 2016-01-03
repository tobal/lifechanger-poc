
import {Component, View} from 'angular2/core';

import {NodeView} from './node/nodeview';
import {AddQuest} from './quest/addquest';
import {Quest} from './quest/quest';
import {QuestView} from './quest/questview';
import {SheetService} from './sheetservice'

// import {readJson, writeJson} from 'typings/dist/utils/fs';

@Component({
    selector: 'charsheet',
    template: require('./charsheet.html'),
    directives: [NodeView, AddQuest, QuestView]
})
export class CharSheet {
    questarray: Array<Quest>;
    content: string;
    constructor(public sheetService: SheetService) {
        this.questarray = [];
    }

    getSheet() {
        return this.sheetService.getSheet();
    }

    displayContent() {
        let contentObj = {
            sheet: this.sheetService.getSheet(),
            quests: this.questarray
        };
        this.content = JSON.stringify(contentObj);
    }

    loadContent() {
        let contentObj = JSON.parse(this.content);
        this.sheetService.setSheet(contentObj.sheet);
        this.questarray = contentObj.quests;
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
