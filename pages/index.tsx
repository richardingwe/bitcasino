import type { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
	return (
		<>
			<div className='bg-primary relative main overflow-hidden'>
				<div className='container pt-8 pb-6'>
					<Header />
					<Hero />
				</div>
			</div>
			<div className='container py-6 bg-white'>
				<Footer />
			</div>
		</>
	);
};

export default Home;
