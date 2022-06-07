export type CoinDataType = {
	coinCode: String;
	marketSymbol: String;
	ticker: {
		lastPrice: String;
		__typename: String;
	};
};
