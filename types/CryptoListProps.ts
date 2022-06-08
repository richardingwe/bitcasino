import { CoinDataType } from "./CoinDataType";

export type CryptoListProps = {
	coins: CoinDataType[];
	deleteCoin: (coinCode: string) => void;
};
