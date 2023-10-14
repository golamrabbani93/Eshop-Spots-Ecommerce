import {RouterProvider} from 'react-router-dom';
import router from './Routes/MainRoutes';

function App() {
	return (
		<div className="App">
			<div className="relative">
				<RouterProvider router={router}></RouterProvider>
			</div>
			<div id="page"></div>
		</div>
	);
}

export default App;
