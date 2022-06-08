import { CoinDataType } from "./CoinDataType";

export type ButtonProps = {
	coin: CoinDataType;
	deleteCoin: (coinCode: string) => void;
};
