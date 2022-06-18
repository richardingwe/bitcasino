import Image from "next/image";

const Header = () => {
	return (
		<header>
			<nav className='w-[150px] lg:w-[200px]'>
				<Image src='/assets/logo.svg' width={200} height={40} />
			</nav>
		</header>
	);
};

export default Header;
