import { CoinDataType } from "./CoinDataType";

export type ListItemProps = {
	coin: CoinDataType;
	deleteCoin: (coinCode: string) => void;
};
