import { useEffect, useState } from "react";

export default function AuthorCard({
	author,
	removeFromFav,
	addToFav,
	loadFromLocalStorage,
}) {
	const [favorite, setFavourite] = useState(false);

	useEffect(() => {
		if (loadFromLocalStorage.length > 0) {
			const findItem = loadFromLocalStorage.find(
				(authorItem) => authorItem._id === author._id
			);
			if (findItem) {
				setFavourite(true);
			} else {
				setFavourite(false);
			}
		}
	}, [loadFromLocalStorage]);

	return (
		<div className="p-5 rounded-md flex flex-col justify-between shadow border">
			<div>
				<a href={`${author.link}`} target="_blank" rel="noreferrer">
					<h4 className=" text-xl text-blue-800 font-medium text-center mb-3">
						{author.name}
					</h4>
				</a>
				<p className=" text-justify text-ellipsis font-light leading-tight">
					{author.bio}
				</p>
			</div>
			{favorite ? (
				<button
					className=" w-full  bg-green-500 hover:bg-gray-700 text-white text-lg rounded py-1 mt-3"
					onClick={() => {
						removeFromFav(author);
						setFavourite(true);
					}}
				>
					Remove Favourite
				</button>
			) : (
				<button
					className=" w-full bg-blue-800 hover:bg-gray-700 text-white text-lg rounded py-1 mt-3"
					onClick={() => {
						addToFav(author);
						setFavourite(false);
					}}
				>
					Add to Favourite
				</button>
			)}
		</div>
	);
}
