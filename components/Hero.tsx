import { useState } from "react";
import { toast } from "react-toastify";
import { useLazyQuery } from "@apollo/client";
import { PRICE } from "../queries/PRICE";
import { CoinDataType } from "../types/CoinDataType";
import CryptoList from "./CryptoList";
import Form from "./Form";
import HeadLine from "./HeadLine";

const Hero = () => {
	const [coins, setCoins] = useState<CoinDataType[]>([]);
	const [coinCode, setCoinCode] = useState<string>("");
	const [code, setCode] = useState<string>("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCode(event.target.value.toUpperCase());
	};

	const getCoin = (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault();
		setCoinCode((state: string) => (state = code));
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
						(state = [{ ...data.markets[0], coinCode }, ...state])
				);
				setCode("");
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

	return (
		<main className='my-4 lg:mt-10 lg:mb-9'>
			<section>
				<div className='w-full flex flex-col lg:flex-row flex-wrap gap-y-6 items-center justify-between'>
					<HeadLine />
					<Form
						getCoin={getCoin}
						loading={loading}
						code={code}
						handleChange={handleChange}
					/>
				</div>
				<CryptoList coins={coins} deleteCoin={deleteCoin} />
			</section>
		</main>
	);
};

export default Hero;
