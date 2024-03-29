import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { Games } from "./Pages/Games";
import { Web } from "./Pages/Web";
import { About } from "./Pages/About";

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
			{
				path: "/about",
				element: <About />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
