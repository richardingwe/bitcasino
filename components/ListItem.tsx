import React from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { ListItemProps } from "../types/ListItemProps";
import CloseButton from "./CloseButton";

const ListItem = ({ coin, deleteCoin }: ListItemProps) => {
	return (
		<li
			title={coin?.coinCode}
			key={uuidv4()}
			className='flex items-center justify-between w-full lg:w-[280px] py-3 border-b-[1px] border-[#9484a4]'>
			<div className='flex items-center gap-x-8'>
				<Image src='/assets/icon.svg' alt='trophy' width={40} height={50} />
				<div className='flex flex-col gap-2'>
					<div className='text-white capitalize'>{coin?.coinCode}</div>
					<div className='text-[#9484a4] text-[13px]'>
						{Number(coin?.ticker?.lastPrice || 0).toFixed(2)}€
					</div>
				</div>
			</div>
			<CloseButton coin={coin} onClick={deleteCoin} />
		</li>
	);
};

export default ListItem;
