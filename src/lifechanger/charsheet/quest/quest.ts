
import {NodeValue} from '../node/node'

export class Quest {
    constructor(public title: string = '',
    			public description: string = '',
				public type: string = '',
    			public rewards: Array<QuestReward> = []) {}
}

export class QuestReward {
	constructor(public node: NodeValue, public rewardValue: number) {}
}
