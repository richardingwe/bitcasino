import { useEffect, useState } from "react";
import CryptoList from "./CryptoList";
import Form from "./Form";
import HeadLine from "./HeadLine";
import useCoins from "../hooks/useCoins";

const Hero = () => {
	const [code, setCode] = useState<string>("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCode(event.target.value.toUpperCase());
	};

	const handleGetCoin = async (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault();
		getCoin(code);
	};

	const { deleteCoin, getCoin, loading, coins, isSuccess } = useCoins();

	useEffect(() => {
		if (isSuccess) setCode("");
	}, [isSuccess]);

	return (
		<main className='my-4 lg:mt-10 lg:mb-9'>
			<section>
				<div className='w-full flex flex-col lg:flex-row flex-wrap gap-y-6 items-center justify-between'>
					<HeadLine />
					<Form
						getCoin={handleGetCoin}
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
