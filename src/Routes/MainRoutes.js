import {createBrowserRouter} from 'react-router-dom';
import MainLayouts from '../layouts/MainLayouts';
import Home from '../Pages/Homes/Home/Home';
import Shop from '../Pages/Shop/Shop/Shop';
import Blog from '../Pages/Blog/Blog/Blog';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayouts></MainLayouts>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: '/shop',
				element: <Shop></Shop>,
			},
			{
				path: '/blog',
				element: <Blog></Blog>,
			},
		],
	},
]);

export default router;
