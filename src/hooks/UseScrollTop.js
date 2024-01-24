import {useEffect} from 'react';

const UseScrollTop = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
};

export default UseScrollTop;
