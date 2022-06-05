import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
	return (
		<div className=''>
			<Head>
				<title>Bitcasino</title>
				<link rel='icon' href='/favicon.ico' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<div className='container mx-auto py-6 lg:px-32 bg-primary'>
				<Header />
				<Hero />
			</div>
			<div className='container mx-auto py-6 lg:px-32 bg-white'>
				<Footer />
			</div>
		</div>
	);
};

export default Home;
