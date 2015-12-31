
import {Component, View} from 'angular2/core';

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
    addFormVisible: boolean = false;
    questTitle: string = '';
    questDescription: string = '';
    questRewards: Array<QuestReward>;

    constructor() {
        this.questRewards = [];
    }

    showAddQuestForm() {
        this.addFormVisible = true;
    }

    addQuest() {
        this.addFormVisible = false;
    }
}
