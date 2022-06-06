import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { useLazyQuery, gql } from "@apollo/client";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CssTextField = styled(TextField)({
	"& label.Mui-focused": {
		color: "black",
	},
	"& .MuiInput-underline:after": {
		borderBottomColor: "black",
	},
	"& .MuiOutlinedInput-root": {
		"& fieldset": {
			borderColor: "black",
		},
		"&:hover fieldset": {
			borderColor: "black",
		},
		"&.Mui-focused fieldset": {
			borderColor: "black",
		},
	},
});

const PRICE = gql`
	query price($coinCode: String!) {
		markets(
			filter: { baseSymbol: { _eq: $coinCode }, quoteSymbol: { _eq: "EUR" } }
		) {
			marketSymbol
			ticker {
				lastPrice
			}
		}
	}
`;

type CoinData = {
	coinCode: String;
	marketSymbol: String;
	ticker: {
		lastPrice: String;
		__typename: String;
	};
};

const Hero = () => {
	const [coins, setCoins] = useState<CoinData[]>([]);
	const [coinCode, setCoinCode] = useState<String>("");
	const [code, setCode] = useState("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCode(event.target.value.toUpperCase());
	};

	const getCoin = (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault();
		setCoinCode((state) => (state = code));
		fetchCoin();
	};

	const [fetchCoin, { loading, error }] = useLazyQuery(PRICE, {
		variables: { coinCode },
		fetchPolicy: "network-only",
		onCompleted: (data) => {
			let coinExist = coins.find((coin) => coin.coinCode === coinCode);
			let notFound = data.markets.length === 0;

			if (coinExist) {
				toast.error("Coin already exist!");
				return;
			} else if (notFound) {
				toast.error("Coin not found!");
			}

			if (data && !notFound) {
				setCoins(
					(state) => (state = [...state, { ...data.markets[0], coinCode }])
				);
				setCode("");
			}
		},
	});

	const deleteCoin = (coinCode: String) => {
		let filteredCoins = coins.filter((coin) => coin.coinCode !== coinCode);
		setCoins((state) => (state = [...filteredCoins]));
	};

	return (
		<main className='mt-12 mb-9'>
			<section>
				<div className='w-full flex items-center justify-between'>
					<div className='flex-1'>
						<h1 className='lg:text-[42px] leading-[52px] font-medium text-white mb-5'>
							Now you can track <br />
							all your cryptos here!
						</h1>
						<p className='text-[20px] leading-[26px] tracking-wide text-[#9484a4]'>
							Just enter the <br />
							cryptocurrency code on the
							<br />
							form to the right.
						</p>
					</div>
					<div className='flex-1 flex justify-end z-10'>
						<div className='w-[400px] bg-white px-10 py-8 flex flex-col rounded'>
							<form className='flex flex-col'>
								<CssTextField
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
						coins.map((coin, i) => (
							<div
								key={i}
								className='flex items-center justify-between w-[280px] py-3 border-b-[1px] border-[#9484a4]'>
								<div className='flex items-center gap-x-8'>
									<img src='/assets/icon.svg' alt='trophy' />
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
