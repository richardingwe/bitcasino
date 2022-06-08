import React from "react";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import { v4 as uuidv4 } from "uuid";
import { CoinDataType } from "../types/CoinDataType";

type CryptoListProps = {
	coins: CoinDataType[];
	deleteCoin: (coinCode: string) => void;
};

const CryptoList = ({ coins, deleteCoin }: CryptoListProps) => {
	return (
		<ul className='mt-[32px] z-[20]'>
			{coins &&
				coins.map((coin: CoinDataType) => (
					<li
						title={coin.coinCode}
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
						<button
							title={`delete ${coin.coinCode}`}
							className='text-white cursor-pointer'
							onClick={() => deleteCoin(coin.coinCode)}>
							<CloseIcon color='inherit' style={{ height: "15px" }} />
						</button>
					</li>
				))}
		</ul>
	);
};

export default CryptoList;
