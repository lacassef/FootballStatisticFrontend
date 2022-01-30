export interface awayItem {
	bigChancesMissed: number;
	redCard: number;
	fouls: number;
	possession: number;
	yellowCard: number;
	blockedShots: number;
	accurateLongBalls: number;
	accurateDribles: number;
	totalShots: number;
	bigChances: number;
	shotsOutsideTheBox: number;
	shotsInsideTheBox: number;
	tackles: number;
	totalPasses: number;
	aerialDuelsWon: number;
	shotsOnTarget: number;
	goalkeeperSaves: number;
	cornerKicks: number;
	accuratePasses: number;
	totalDribles: number;
	interceptions: number;
	totalLongBalls: number;
	totalCrosses: number;
	offside: number;
	duelsWon: number;
	clearances: number;
	accurateCrosses: number;
}

export interface periodsItem {
	away: awayItem;
	name: string;
	home: homeItem;
}

export interface homeItem {
	bigChancesMissed: number;
	redCard: number;
	fouls: number;
	possession: number;
	yellowCard: number;
	blockedShots: number;
	accurateLongBalls: number;
	accurateDribles: number;
	totalShots: number;
	bigChances: number;
	shotsOutsideTheBox: number;
	shotsInsideTheBox: number;
	tackles: number;
	totalPasses: number;
	aerialDuelsWon: number;
	shotsOnTarget: number;
	goalkeeperSaves: number;
	cornerKicks: number;
	accuratePasses: number;
	totalDribles: number;
	interceptions: number;
	totalLongBalls: number;
	totalCrosses: number;
	offside: number;
	duelsWon: number;
	clearances: number;
	accurateCrosses: number;
}

export interface ScheduleStatistics {
	periods: Array<periodsItem>;
}

