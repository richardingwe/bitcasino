import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

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

const Hero = () => {
	return (
		<main className='my-12'>
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
					<div className='flex-1 flex justify-end'>
						<div className='w-[400px] bg-white p-10 flex flex-col rounded'>
							<CssTextField
								label='CRYPTOCURRENCY CODE'
								variant='outlined'
								size='small'
								id='outlined-size-small'
								defaultValue='BTC'
								margin='normal'
							/>
							<button className='border-0 outline-none bg-[#fd4b24] p-[10px] text-white rounded-[20px] text-sm mb-10'>
								Add
							</button>
							<p className='text-sm text-gray-400 text-center tracking-[0.5px]'>
								Use of this service is subject to terms and conditions.
							</p>
						</div>
					</div>
				</div>

				<div className='mt-[32px]'>
					<div className='flex items-center justify-between w-[280px] py-3 border-b-[1px] border-[#9484a4]'>
						<div className='flex items-center gap-x-8'>
							<img src='/assets/icon.svg' alt='trophy' />
							<div className='flex flex-col gap-2'>
								<div className='text-white capitalize'>BTC</div>
								<div className='text-[#9484a4] text-[13px]'>7842.27€</div>
							</div>
						</div>
						<div className='text-white cursor-pointer'>
							<CloseIcon color='inherit' style={{ height: "15px" }} />
						</div>
					</div>
					<div className='flex items-center justify-between w-[280px] py-3 border-b-[1px] border-[#9484a4]'>
						<div className='flex items-center gap-x-8'>
							<img src='/assets/icon.svg' alt='trophy' />
							<div className='flex flex-col gap-2'>
								<div className='text-white capitalize'>BTC</div>
								<div className='text-[#9484a4] text-[13px]'>7842.27€</div>
							</div>
						</div>
						<div className='text-white cursor-pointer'>
							<CloseIcon color='inherit' style={{ height: "15px" }} />
						</div>
					</div>
					<div className='flex items-center justify-between w-[280px] py-3 border-b-[1px] border-[#9484a4]'>
						<div className='flex items-center gap-x-8'>
							<img src='/assets/icon.svg' alt='trophy' />
							<div className='flex flex-col gap-2'>
								<div className='text-white capitalize'>BTC</div>
								<div className='text-[#9484a4] text-[13px]'>7842.27€</div>
							</div>
						</div>
						<div className='text-white cursor-pointer'>
							<CloseIcon color='inherit' style={{ height: "15px" }} />
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Hero;
