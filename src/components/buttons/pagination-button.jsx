import React from "react";

export default function PaginationButton({ onclickhandler, path }) {
	return (
		<button
			className="bg-gray-700 text-white text-lg rounded hover:bg-gray-400 hover:text-black"
			onClick={() => onclickhandler()}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={2}
			>
				<path strokeLinecap="round" strokeLinejoin="round" d={path} />
			</svg>
		</button>
	);
}
