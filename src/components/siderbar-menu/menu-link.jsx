import { NavLink } from "react-router-dom";

export default function MenuLink({ to, title }) {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				isActive
					? "w-full block text-lg bg-blue-800 text-white py-2 px-3 rounded-md hover:bg-gray-700 hover:text-white cursor-pointer"
					: "w-full block text-lg bg-gray-700 text-white py-2 px-3 rounded-md  hover:bg-gray-700 hover:text-white cursor-pointer"
			}
		>
			{title}
		</NavLink>
	);
}
