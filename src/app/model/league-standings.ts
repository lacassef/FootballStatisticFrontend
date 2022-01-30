export interface teamItem {
	score: number;
	name: string;
	id: number;
	shortName: string;
}

export interface rowsItem {
	wins: number;
	scored: number;
	draws: number;
	position: number;
	team: teamItem;
	losses: number;
	scoredAgainst: number;
	promotion: string;
	points: number;
}

export interface LeagueStandings {
	rows: Array<rowsItem>;
}

