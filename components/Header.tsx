import Image from "next/image";

const Header = () => {
	return (
		<nav>
			<div>
				<Image src='/assets/logo.svg' width={200} height={40} />
			</div>
		</nav>
	);
};

export default Header;
