import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { Games } from "./Pages/Games";
import { SuspensedView } from "./partials/SuspensedView";
import { Error404 } from "./Pages/errors/Error404";

const Web = lazy(() => import("./Pages/Web"));
const About = lazy(() => import("./Pages/About"));

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <Error404 />,
		children: [
			{
				index: true,
				element: <Games />,
			},
			{
				path: "/web",
				element: (
					<SuspensedView>
						<Web />
					</SuspensedView>
				),
			},
			{
				path: "/about",
				element: (
					<SuspensedView>
						<About />
					</SuspensedView>
				),
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
