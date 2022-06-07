export type CoinDataType = {
	coinCode: string;
	marketSymbol: string;
	ticker: {
		lastPrice: string;
		__typename: string;
	};
};
