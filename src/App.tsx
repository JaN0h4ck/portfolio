import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { Games } from "./Games";
import { Web } from "./Web";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Games />,
			},
			{
				path: "/web",
				element: <Web />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
