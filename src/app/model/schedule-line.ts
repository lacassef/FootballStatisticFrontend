export interface awayItem {
	players: Array<playersItem>;
	formation: string;
	missingPlayers: Array<playersItem>;
  lines: number[]
}

export interface playersItem {
	country: string;
	shirtNumber: number;
	missingReason: number;
	name: string;
	missing: boolean;
	dateOfBirth: string;
	position: string;
	id: number;
  avgRating: number
	shortName: string;
	substitute: boolean;
	statistics: statisticsItem;
}

export interface statisticsItem {
	fouls: number;
	rating: number;
	accurateLongBalls: number;
	totalClearance: number;
	saves: number;
	accurateCross: number;
	onTargetScoringAttempt: number;
	wasFouled: number;
	wonContest: number;
	goals: number;
	totalPass: number;
	interceptionWon: number;
	blockedScoringAttempt: number;
	totalOffside: number;
	duelWon: number;
	aerialWon: number;
	totalLongBalls: number;
	touches: number;
	accuratePass: number;
	keyPass: number;
	savedShotsFromInsideTheBox: number;
	totalCross: number;
	minutesPlayed: number;
	totalTackle: number;
	totalContest: number;
	goalAssist: number;
}

export interface homeItem {
	players: Array<playersItem>;
	formation: string;
	missingPlayers: Array<playersItem>;
  lines: number[]
}

export interface ScheduleLine {
	away: awayItem;
	confirmed: boolean;
	home: homeItem;
}

