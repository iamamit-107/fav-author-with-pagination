import React from "react";
import SvgButton from "../buttons/svg-button";
import MenuLink from "../siderbar-menu/menu-link";

export default function Header({ sidebar, setSidebar }) {
	return (
		<header className="w-100 bg-white shadow-sm px-5 py-3 flex justify-between items-center sticky top-0">
			<div>
				<button onClick={() => setSidebar(!sidebar)}>
					<SvgButton path={"M4 6h16M4 12h8m-8 6h16"} />
				</button>
			</div>
			<div className="flex items-center">
				<div className="hidden md:block">
					<MenuLink to={"/"} title="Author" />
				</div>
				<div className="mx-3 hidden md:block">
					<MenuLink to={"/favourite-author"} title="Favorite Author" />
				</div>
			</div>
		</header>
	);
}
