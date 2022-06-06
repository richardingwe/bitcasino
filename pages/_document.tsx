import Document, {
	DocumentContext,
	Html,
	Main,
	Head,
	NextScript,
} from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);

		return initialProps;
	}

	ender() {
		return (
			<Html>
				<Head>
					<title>Bitcasino</title>
					<link rel='icon' href='/favicon.ico' />
					<link
						rel='preconnect'
						href='https://fonts.gstatic.com'
						crossOrigin='true'
					/>
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
