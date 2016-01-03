
import {Component, View} from 'angular2/core';
import {Quest} from './quest'
import {SheetService} from '../sheetservice'

@Component({
    selector: 'quest-view',
    inputs: ['quests: quests']
})
@View({
    template: require('./questview.html')
})
export class QuestView {
    quests: Array<Quest>;
    constructor(public sheetService: SheetService) {}

    completeQuest(quest) {
		let that = this;
    	quest.rewards.forEach(function(reward) {
			that.sheetService.applyReward(reward.path.split(','), reward.rewardValue);
		})
    }
}
