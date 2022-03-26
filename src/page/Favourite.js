import React, { useEffect, useState } from "react";
import AuthorCard from "../components/author-card";
import SvgButton from "../components/buttons/svg-button";
import Loader from "../components/loader/loader";

export default function Favourite() {
	const [loading, setLoading] = useState(true);
	const [loadFromLocalStorage, setLoadFromLocalStorage] = useState([]);

	const removeFromFav = (author) => {
		const filterAuthor = loadFromLocalStorage.filter(
			(authorItem) => authorItem._id !== author._id
		);
		setLoadFromLocalStorage(filterAuthor);
		localStorage.setItem("fav_author", JSON.stringify([...filterAuthor]));
	};

	useEffect(() => {
		const LS = localStorage.getItem("fav_author")
			? JSON.parse(localStorage.getItem("fav_author"))
			: [];
		setLoadFromLocalStorage(LS);
		setTimeout(() => {
			setLoading(false);
		}, 200);
	}, []);
	return (
		<>
			{loading ? (
				<section className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 p-5 gap-5">
					<Loader />
				</section>
			) : (
				<>
					{loadFromLocalStorage.length > 0 ? (
						<section className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 p-5 gap-5">
							{loadFromLocalStorage.map((author, index) => (
								<AuthorCard
									key={index}
									author={author}
									removeFromFav={removeFromFav}
									loadFromLocalStorage={loadFromLocalStorage}
								/>
							))}
						</section>
					) : (
						<div className="w-full jmx-auto text-center mt-10">
							<div>
								<div className=" flex justify-center">
									<SvgButton
										path={
											"M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										}
										size="10"
									/>
								</div>
								<h3 className=" text-2xl font-medium">
									No favourite author added yet!
								</h3>
							</div>
						</div>
					)}
				</>
			)}
		</>
	);
}
