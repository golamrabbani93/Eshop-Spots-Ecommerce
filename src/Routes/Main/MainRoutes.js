import {createBrowserRouter} from 'react-router-dom';
import MainLayouts from '../../layouts/MainLayouts';
import Home from '../../Pages/Homes/Home/Home';
import Shop from '../../Pages/Shop/Shop/Shop';
import Blog from '../../Pages/Blog/Blog/Blog';
import SignUp from '../../Pages/Register/SignUp/SignUp';
import Login from '../../Pages/Register/Login/Login';
import WishLists from '../../Pages/Shop/WishLists/WishLists';
import Cart from '../../Pages/Shop/Cart/Cart';
import CheckOut from '../../Pages/Shop/CheckOut/CheckOut';

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
				path: '/shop/wishlist',
				element: <WishLists></WishLists>,
			},
			{
				path: '/shop/cart',
				element: <Cart></Cart>,
			},
			{
				path: '/shop/checkout',
				element: <CheckOut></CheckOut>,
			},
			{
				path: '/blog',
				element: <Blog></Blog>,
			},
			{
				path: '/Signup',
				element: <SignUp></SignUp>,
			},
			{
				path: '/login',
				element: <Login></Login>,
			},
		],
	},
]);

export default router;
