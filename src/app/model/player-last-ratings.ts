export interface opponentItem {
	score: number;
	name: string;
	id: number;
	shortName: string;
}

export interface PlayerLastRatings {
	date: string;
	opponent: opponentItem;
	rating: number;
	isHome: boolean;
	id: number;
	time: string;
}

