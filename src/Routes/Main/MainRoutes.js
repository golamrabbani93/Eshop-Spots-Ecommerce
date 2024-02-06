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
import MyAccountLayout from '../../layouts/MyAccountLayout/MyAccountLayout';
import Orders from '../../Pages/DashBoard/MyAccount/Orders/Orders';
import OrderDetails from '../../Pages/DashBoard/MyAccount/Orders/OrderDetails';
import NotFound from '../../Pages/Shared/NotFound/NotFound';
import Address from '../../Pages/DashBoard/MyAccount/Address/Address';
import DashBoard from '../../Pages/DashBoard/MyAccount/DashBoard/DashBoard';
import DownLoad from '../../Pages/DashBoard/MyAccount/DownLoad/DownLoad';
import AccountDetails from '../../Pages/DashBoard/MyAccount/AccountDetails/AccountDetails';
import AdminLayout from '../../layouts/AdminLayout/AdminLayout';
import AdminRoute from '../Admin/AdminRoute';
import AllUsers from '../../Pages/DashBoard/Admin/AllUsers/AllUsers';
import Dashboard from '../../Pages/DashBoard/Admin/Dashboard/Dashboard';
import AllOrders from '../../Pages/DashBoard/Admin/AllOrders/AllOrders';
import UserOrderDetails from '../../Pages/DashBoard/Admin/AllOrders/UserOrderDetails/UserOrderDetails';

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
		// *customer dashboard Start
		path: '/dashboard/myaccount',
		element: <MyAccountLayout></MyAccountLayout>,
		children: [
			{
				path: '/dashboard/myaccount',
				element: (
					<PrivateRoutes>
						<DashBoard></DashBoard>
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
			{
				path: '/dashboard/myaccount/orders/:id',
				element: (
					<PrivateRoutes>
						<OrderDetails></OrderDetails>
					</PrivateRoutes>
				),
			},
			{
				path: '/dashboard/myaccount/downloads',
				element: (
					<PrivateRoutes>
						<DownLoad></DownLoad>
					</PrivateRoutes>
				),
			},
			{
				path: '/dashboard/myaccount/address',
				element: (
					<PrivateRoutes>
						<Address></Address>
					</PrivateRoutes>
				),
			},
			{
				path: '/dashboard/myaccount/accountdetails',
				element: (
					<PrivateRoutes>
						<AccountDetails></AccountDetails>
					</PrivateRoutes>
				),
			},
		],
		// *customer dashboard end
	},
	// *Admmin Dashboard Start
	{
		path: '/dashboard/admin',
		element: <AdminLayout></AdminLayout>,
		children: [
			{
				path: '/dashboard/admin',
				element: (
					<AdminRoute>
						<PrivateRoutes>
							<Dashboard></Dashboard>
						</PrivateRoutes>
					</AdminRoute>
				),
			},
			{
				path: '/dashboard/admin/allusers',
				element: (
					<AdminRoute>
						<PrivateRoutes>
							<AllUsers></AllUsers>
						</PrivateRoutes>
					</AdminRoute>
				),
			},
			{
				path: '/dashboard/admin/allorders',
				element: (
					<AdminRoute>
						<PrivateRoutes>
							<AllOrders></AllOrders>
						</PrivateRoutes>
					</AdminRoute>
				),
			},
			{
				path: '/dashboard/admin/allorders/:email',
				element: (
					<AdminRoute>
						<PrivateRoutes>
							<UserOrderDetails></UserOrderDetails>
						</PrivateRoutes>
					</AdminRoute>
				),
			},
		],
	},
	// *Admmin Dashboard End
	{
		path: '*',
		element: <NotFound />,
	},
]);

export default router;
