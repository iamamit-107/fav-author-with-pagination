import React from "react";
import { Routes, Route } from "react-router-dom";

import Loader from "./components/loader/loader";
import Home from "./page/Home";
const Favourite = React.lazy(() => import("./page/Favourite"));

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route
				path="/favourite-author"
				element={
					<React.Suspense fallback={<Loader />}>
						<Favourite />
					</React.Suspense>
				}
			/>
		</Routes>
	);
}
