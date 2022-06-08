import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { ButtonProps } from "../types/ButtonProps";

const Button = ({ coin, deleteCoin }: ButtonProps) => {
	return (
		<button
			title={`delete ${coin.coinCode}`}
			className='text-white cursor-pointer'
			onClick={() => deleteCoin(coin.coinCode)}>
			<CloseIcon color='inherit' style={{ height: "15px" }} />
		</button>
	);
};

export default Button;
