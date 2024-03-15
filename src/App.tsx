import { Outlet, RouterProvider, createBrowserRouter, redirect } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Outlet />,
		children: [
			{
				index: true,
				element: <div>Games</div>,
			},
			{
				path: "/web",
				element: <div>Web</div>,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
