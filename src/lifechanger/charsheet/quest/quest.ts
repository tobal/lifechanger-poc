
export class Quest {
    constructor(public title: string = '',
    			public description: string = '',
				public type: string = '',
    			public rewards: Array<QuestReward> = []) {}
}

export class QuestReward {
	constructor(public path: string, public rewardValue: number) {}
}
