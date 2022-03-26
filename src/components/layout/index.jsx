import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";

export default function Layout({ children, sidebar, setSidebar }) {
	return (
		<main className=" flex min-h-screen max-h-screen">
			<Sidebar sidebar={sidebar} setSidebar={setSidebar} />
			<section className=" flex-1 overflow-y-auto relative">
				<Header sidebar={sidebar} setSidebar={setSidebar} />

				{children}
			</section>
		</main>
	);
}
