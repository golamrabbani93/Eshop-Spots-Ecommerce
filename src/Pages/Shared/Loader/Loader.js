import React from 'react';
import {Player} from '@lottiefiles/react-lottie-player';
import data from './data.json';
const Loader = () => {
	return (
		<div className="bg-white fixed top-0 left-0 w-[100vw] h-[100vh] z-50 flex justify-center items-center">
			<Player
				autoplay
				loop
				src={data}
				className="w-[400px] md:w-[500px] lg:w-[800px] h-[400px]  md:h-[500px]"
			>
				{/* <Controls /> */}
			</Player>
		</div>
	);
};

export default Loader;
