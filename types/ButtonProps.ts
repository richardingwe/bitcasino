import { CoinDataType } from "./CoinDataType";

export type ButtonProps = {
	code: string;
	loading: boolean;
	onClick: (event: React.MouseEvent<HTMLElement>) => void;
};

export type CloseButtonProps = {
	coin: CoinDataType;
	onClick: (coinCode: string) => void;
};
