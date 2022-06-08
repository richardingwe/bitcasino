import type { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home: NextPage = () => {
	return (
		<>
			<div className='bg-primary relative main overflow-hidden'>
				<div className='container py-5 lg:pt-8 lg:pb-6'>
					<Header />
					<Hero />
				</div>
			</div>
			<div className='container py-6 bg-white'>
				<Footer />
			</div>
			<ToastContainer />
		</>
	);
};

export default Home;
