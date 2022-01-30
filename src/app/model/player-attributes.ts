
export interface averageItem {
	saves: number;
	technical: number;
	anticipation: number;
	ballDistribution: number;
	defending: number;
	position: string;
	tactical: number;
	creativity: number;
	aerial: number;
	attacking: number;
}

export interface playerItem {
	saves: number;
	technical: number;
	anticipation: number;
	ballDistribution: number;
	defending: number;
	position: string;
	tactical: number;
	creativity: number;
	aerial: number;
	attacking: number;
}

export interface PlayerAttributes {
	average: averageItem;
	player: playerItem;
}

