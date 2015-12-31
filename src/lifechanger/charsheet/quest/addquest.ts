
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
        this.sheetValues = [new SheetValue(new NodeValue('asd', 3), 'caption')];
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
}

class SheetValue {
    constructor(public node: NodeValue, public caption: string) {}
}