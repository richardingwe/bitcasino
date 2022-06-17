import { CoinDataType } from "../types/CoinDataType";
import { CryptoListProps } from "../types/CryptoListProps";
import ListItem from "./ListItem";

const CryptoList = ({ coins, deleteCoin }: CryptoListProps) => {
	return (
		<ul className='mt-[32px] z-[20]'>
			{coins?.map((coin: CoinDataType) => (
				<ListItem coin={coin} key={coin.coinCode} deleteCoin={deleteCoin} />
			))}
		</ul>
	);
};

export default CryptoList;
