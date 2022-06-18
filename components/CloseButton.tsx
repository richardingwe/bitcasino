import CloseIcon from "@mui/icons-material/Close";
import { CloseButtonProps } from "../types/ButtonProps";

const CloseButton: React.FC<CloseButtonProps> = ({ coin, onClick }) => {
	return (
		<button
			type='button'
			aria-label={`delete ${coin.coinCode}`}
			title={`delete ${coin.coinCode}`}
			className='text-white cursor-pointer z-10'
			onClick={() => onClick(coin.coinCode)}>
			<CloseIcon color='inherit' style={{ height: "15px" }} />
		</button>
	);
};

export default CloseButton;
