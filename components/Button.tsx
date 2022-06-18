import ClipLoader from "react-spinners/ClipLoader";
import { ButtonProps } from "../types/ButtonProps";

const Button: React.FC<ButtonProps> = ({ code, loading, onClick, label }) => {
	return (
		<button
			type='submit'
			disabled={!code || loading}
			onClick={onClick}
			className='disabled:bg-[#fd4c24bc] disabled:cursor-not-allowed border-0 outline-none bg-[#fd4b24] p-[10px] text-white rounded-[20px] text-sm mb-10 flex items-center justify-center'>
			<ClipLoader color='#fff' loading={loading} size={20} />
			{!loading && label}
		</button>
	);
};

export default Button;
