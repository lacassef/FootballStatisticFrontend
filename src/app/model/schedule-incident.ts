export interface playerInItem {
	country: string;
	shirtNumber: number;
	missingReason: number;
	name: string;
	missing: boolean;
	dateOfBirth: string;
	position: string;
	id: number;
	shortName: string;
	substitute: boolean;
	statistics: statisticsItem;
}

export interface playerOutItem {
	country: string;
	shirtNumber: number;
	missingReason: number;
	name: string;
	missing: boolean;
	dateOfBirth: string;
	position: string;
	id: number;
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

export interface playerItem {
	country: string;
	shirtNumber: number;
	missingReason: number;
	name: string;
	missing: boolean;
	dateOfBirth: string;
	position: string;
	id: number;
	shortName: string;
	substitute: boolean;
	statistics: statisticsItem;
}

export interface ScheduleIncident {
	code: number;
	homeScore: number;
	awayScore: number;
	playerIn: playerInItem;
	playerOut: playerOutItem;
	addedTime: number;
	isHome: boolean;
	time: number;
	player: playerItem;
}

