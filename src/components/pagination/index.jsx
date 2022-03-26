import React from "react";
import PaginationButton from "../buttons/pagination-button";

export default function Pagination({ prev, next, page }) {
	return (
		<div className="flex justify-between w-2/3 md:w-1/3 border-2 rounded-md px-3 py-2 bg-blue-100">
			<PaginationButton onclickhandler={prev} path={"M15 19l-7-7 7-7"} />

			<div className=" text-xl font-bold">{page}</div>

			<PaginationButton onclickhandler={next} path={"M9 5l7 7-7 7"} />
		</div>
	);
}
