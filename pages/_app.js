import '../public/styles/css/main.css';
const MyApp = ({ Component, pageProps }) => {
	return (
		<div className='app-container'>
			<Component {...pageProps} />
		</div>
	);
};

export default MyApp;
