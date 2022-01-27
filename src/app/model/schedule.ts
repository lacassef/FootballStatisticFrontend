export interface venue {
	city: string;
	stadium: string;
}

export interface away {
	score: number;
	name: string;
	id: number;
	shortName: string;
}

export interface tournament {
	country: string;
	name: string;
	season: number;
	id: number;
}

export interface live {
	period: number;
	periodStart: number;
}

export interface home {
	score: number;
	name: string;
	id: number;
	shortName: string;
}

export interface Schedule {
	date: string;
	hasLines: boolean;
	venue: venue;
	away: away;
	id: number;
	time: string;
	tournament: tournament;
	customId: string;
	live: live;
	home: home;
	status: number;
}

