import { useState } from "react";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import CloseIcon from "@mui/icons-material/Close";
import { useLazyQuery } from "@apollo/client";
import ClipLoader from "react-spinners/ClipLoader";
import "react-toastify/dist/ReactToastify.css";
import { PRICE } from "../queries/PRICE";
import { Input } from "../components/Input";
import { CoinDataType } from "../types/CoinDataType";
import { v4 as uuidv4 } from "uuid";

const Hero = () => {
	const [coins, setCoins] = useState<CoinDataType[]>([]);
	const [coinCode, setCoinCode] = useState<String>("");
	const [code, setCode] = useState<String>("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCode(event.target.value.toUpperCase());
	};

	const getCoin = (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault();
		setCoinCode((state: String) => (state = code));
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

	const deleteCoin = (coinCode: String) => {
		let filteredCoins = coins.filter(
			(coin: CoinDataType) => coin.coinCode !== coinCode
		);
		setCoins((state: CoinDataType[]) => (state = [...filteredCoins]));
	};

	return (
		<main className='my-4 lg:mt-10 lg:mb-9'>
			<section>
				<div className='w-full flex flex-col lg:flex-row flex-wrap gap-y-6 items-center justify-between'>
					<div className='flex-1 z-10'>
						<h1 className='text-[36px] lg:text-[42px] lg:w-[390px] lg:leading-[52px] font-medium text-white mb-5'>
							Now you can track all your cryptos here!
						</h1>
						<p className='text-[20px] lg:w-[270px] leading-[26px] tracking-wide text-[#9484a4]'>
							Just enter the cryptocurrency code on the form to the right.
						</p>
					</div>
					<div className='flex-1 w-full flex md:justify-end z-10'>
						<div className='w-full lg:w-[60%] bg-white p-6 lg:px-10 lg:py-8 flex flex-col rounded'>
							<form className='flex flex-col'>
								<Input
									label='CRYPTOCURRENCY CODE'
									variant='outlined'
									size='small'
									id='outlined-size-small'
									margin='normal'
									value={code}
									onChange={handleChange}
								/>
								<button
									disabled={!code || loading}
									onClick={getCoin}
									className='disabled:bg-[#fd4c24bc] disabled:cursor-not-allowed border-0 outline-none bg-[#fd4b24] p-[10px] text-white rounded-[20px] text-sm mb-10 flex items-center justify-center'>
									<ClipLoader color='#fff' loading={loading} size={20} />
									{!loading && "Add"}
								</button>
							</form>
							<p className='text-sm text-gray-400 text-center tracking-[0.5px]'>
								Use of this service is subject to terms and conditions.
							</p>
						</div>
					</div>
				</div>

				<div className='mt-[32px] z-[20]'>
					{coins &&
						coins.map((coin: CoinDataType) => (
							<div
								key={uuidv4()}
								className='flex items-center justify-between w-full lg:w-[280px] py-3 border-b-[1px] border-[#9484a4]'>
								<div className='flex items-center gap-x-8'>
									<Image
										src='/assets/icon.svg'
										alt='trophy'
										width={40}
										height={50}
									/>
									<div className='flex flex-col gap-2'>
										<div className='text-white capitalize'>{coin.coinCode}</div>
										<div className='text-[#9484a4] text-[13px]'>
											{Number(coin.ticker.lastPrice).toFixed(2)}€
										</div>
									</div>
								</div>
								<div
									className='text-white cursor-pointer'
									onClick={() => deleteCoin(coin.coinCode)}>
									<CloseIcon color='inherit' style={{ height: "15px" }} />
								</div>
							</div>
						))}
				</div>
			</section>
			<ToastContainer />
		</main>
	);
};

export default Hero;
