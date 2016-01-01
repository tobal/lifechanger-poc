
import {Component, View} from 'angular2/core';

import {NodeArray, NodeValue} from '../node/node'
import {Quest, QuestReward} from './quest';

@Component({
    selector: 'addquest',
    inputs: ['questarray: questarray',
             'sheet: sheet']
})
@View({
    template: require('./addquest.html'),
})
export class AddQuest {
    questarray: Array<Quest>;
    sheet: NodeArray;
    addFormVisible: boolean = false;
    sheetValues: Array<SheetValue>;
    questTitle: string = '';
    questDescription: string = '';
    questType: string = '';
    questRewards: Array<QuestReward>;
    questRewardNode: NodeValue;
    questRewardValue: number = 0;

    constructor() {
        this.questRewards = [];
        this.sheetValues = [];
    }

    showAddQuestForm() {
        this.updateSheetValues();
        this.addFormVisible = true;
    }

    updateSheetValues() {
        this.sheetValues = [];
        gatherValuesFromNodeArray(this.sheet, [], this.sheetValues);
    }

    addQuest() {
        this.addFormVisible = false;
        this.questarray.push(new Quest(this.questTitle, this.questDescription, this.questType, this.questRewards));
        this.questTitle = '';
        this.questDescription = '';
        this.questType = '';
        this.questRewards = [];
    }

    addReward() {
        this.questRewards.push(new QuestReward(this.questRewardNode, this.questRewardValue));
        this.questRewardNode = undefined;
        this.questRewardValue = 0;
    }

    getSheetValueCaption(sheetValue: SheetValue) {
        return sheetValue.path.join(' > ');
    }
}

class SheetValue {
    constructor(public path: Array<string>) { }
}

function gatherValuesFromNodeArray(nodeArray: NodeArray, path: Array<string>, sheetValues: Array<SheetValue>) {
    nodeArray.subvalues.forEach(function(value) {
        sheetValues.push(new SheetValue(path.concat(value.title)));
    });
    nodeArray.subnodes.forEach(function(node) {
        gatherValuesFromNodeArray(node, path.concat(node.title), sheetValues);
    });
}
