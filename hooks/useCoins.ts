import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import { toast } from "react-toastify";
import { PRICE } from "../queries/PRICE";
import { CoinDataType } from "../types/CoinDataType";

export default function useCoins() {
	const [coins, setCoins] = useState<CoinDataType[]>([]);
	const [coinCode, setCoinCode] = useState<string>("");
	const [isSuccess, setIsSuccess] = useState<boolean>(false);

	const getCoin = (coinCode: string) => {
		setCoinCode((state: string) => (state = coinCode));
		setIsSuccess(false);
		fetchCoin();
	};

	const [fetchCoin, { loading }] = useLazyQuery(PRICE, {
		variables: { coinCode },
		fetchPolicy: "network-only",
		onCompleted: (data) => {
			let coinExist = coins.find(
				(coin: CoinDataType) => coin.coinCode === coinCode
			);

			let notFound = data.markets.length === 0;

			if (coinExist) {
				toast.error("Coin already exist!");
				return;
			} else if (notFound) {
				toast.error("Coin not found!");
			}

			if (data && !notFound) {
				setCoins(
					(state: CoinDataType[]) =>
						(state = [{ ...data?.markets[0], coinCode }, ...state])
				);
				setIsSuccess(true);
			}
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});

	const deleteCoin = (coinCode: string) => {
		let filteredCoins = coins.filter(
			(coin: CoinDataType) => coin.coinCode !== coinCode
		);
		setCoins((state: CoinDataType[]) => (state = [...filteredCoins]));
	};

	return { deleteCoin, getCoin, coins, loading, isSuccess };
}
