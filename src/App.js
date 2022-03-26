import { useState } from "react";
import Layout from "./components/layout";
import Router from "./routes";

function App() {
	const [sidebar, setSidebar] = useState(true);

	return (
		<Layout sidebar={sidebar} setSidebar={setSidebar}>
			<Router />
		</Layout>
	);
}

export default App;
