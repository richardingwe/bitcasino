import CloseIcon from "@mui/icons-material/Close";
import { ButtonProps } from "../types/ButtonProps";

const Button: React.FC<ButtonProps> = ({ coin, onClick }) => {
	return (
		<button
			title={`delete ${coin.coinCode}`}
			className='text-white cursor-pointer'
			onClick={() => onClick(coin.coinCode)}>
			<CloseIcon color='inherit' style={{ height: "15px" }} />
		</button>
	);
};

export default Button;
