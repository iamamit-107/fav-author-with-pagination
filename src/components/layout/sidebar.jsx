import SvgButton from "../buttons/svg-button";
import MenuLink from "../siderbar-menu/menu-link";

export default function Sidebar({ sidebar, setSidebar }) {
	return (
		<section
			className={` absolute md:relative h-screen z-10 w-64 bg-blue-100 p-5 transition ease-in duration-700 ${
				sidebar ? "block md:block" : "hidden"
			}`}
		>
			<figure className=" text-center">
				<img src="/images/selise.svg" alt="icon" className="mx-auto mb-10" />
			</figure>

			<div
				className=" absolute top-2 right-2 sm:block md:hidden"
				onClick={() => setSidebar(!sidebar)}
			>
				<SvgButton
					path={
						"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					}
				/>
			</div>

			<div className="mb-3">
				<MenuLink to="/" title="Author" />
			</div>
			<MenuLink to="/favourite-author" title="Favourite Author" />
		</section>
	);
}
