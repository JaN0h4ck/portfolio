import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
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
