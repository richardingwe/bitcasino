import React from "react";
import { Input } from "./Input";
import Button from "./Button";

type FormProps = {
	code: string;
	loading: boolean;
	getCoin: (event: React.MouseEvent<HTMLElement>) => void;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Form = ({ code, loading, getCoin, handleChange }: FormProps) => {
	return (
		<div className='flex-1 w-full flex md:justify-end z-10'>
			<div className='w-full lg:w-[60%] bg-white p-6 lg:px-10 lg:py-8 flex flex-col rounded'>
				<form aria-label='add coin form' className='flex flex-col'>
					<Input
						label='CRYPTOCURRENCY CODE'
						variant='outlined'
						size='small'
						id='outlined-size-small'
						margin='normal'
						value={code}
						onChange={handleChange}
					/>
					<Button label='Add' code={code} loading={loading} onClick={getCoin} />
				</form>
				<p className='text-sm text-gray-400 text-center tracking-[0.5px]'>
					Use of this service is subject to terms and conditions.
				</p>
			</div>
		</div>
	);
};

export default Form;
