
import {Component, View} from 'angular2/core';
import {Quest} from './quest'

@Component({
    selector: 'quest-view',
    inputs: ['quests: quests']
})
@View({
    template: require('./questview.html')
})
export class QuestView {
    quests: Array<Quest>;
}
