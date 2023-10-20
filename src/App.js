import {RouterProvider} from 'react-router-dom';
import router from './Routes/Main/MainRoutes';
import {Toaster} from 'react-hot-toast';

function App() {
	return (
		<div className="App">
			<div className="relative">
				<RouterProvider router={router}></RouterProvider>
			</div>
			<div id="page"></div>
			<Toaster />
		</div>
	);
}

export default App;
