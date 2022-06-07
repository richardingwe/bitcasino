import Image from "next/image";

const Header = () => {
	return (
		<nav>
			<div className='w-[150px] lg:w-[200px]'>
				<Image src='/assets/logo.svg' width={200} height={40} />
			</div>
		</nav>
	);
};

export default Header;
