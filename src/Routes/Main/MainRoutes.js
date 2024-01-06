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
import PrivateRoutes from '../Private/PrivateRoutes';
import Payment from '../../Pages/Shop/CheckOut/Payment/Payment';
import ProductDetails from '../../Pages/Shared/ProductDetails/ProductDetails';
import MyAccount from '../../Pages/DashBoard/MyAccount/MyAccount';
import MyAccountLayout from '../../layouts/MyAccountLayout/MyAccountLayout';
import Orders from '../../Pages/DashBoard/MyAccount/Orders/Orders';

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
				path: '/shop/product/:id',
				element: <ProductDetails></ProductDetails>,
			},
			{
				path: '/shop/category/:name',
				element: <Shop></Shop>,
			},
			{
				path: '/shop/checkout',
				element: (
					<PrivateRoutes>
						<CheckOut></CheckOut>
					</PrivateRoutes>
				),
			},
			{
				path: '/shop/checkout/payment/:id',
				element: (
					<PrivateRoutes>
						<Payment></Payment>
					</PrivateRoutes>
				),
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

	// *Dashboard Routes Start
	{
		path: '/dashboard/myaccount',
		element: <MyAccountLayout></MyAccountLayout>,
		children: [
			{
				path: '/dashboard/myaccount',
				element: (
					<PrivateRoutes>
						<MyAccount></MyAccount>
					</PrivateRoutes>
				),
			},
			{
				path: '/dashboard/myaccount/orders',
				element: (
					<PrivateRoutes>
						<Orders></Orders>
					</PrivateRoutes>
				),
			},
		],
	},
	{
		path: '*',
		element: <h1>Not Found</h1>,
	},
]);

export default router;
