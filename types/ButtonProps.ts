import { CoinDataType } from "./CoinDataType";

export type ButtonProps = {
	coin: CoinDataType;
	onClick: (coinCode: string) => void;
};
