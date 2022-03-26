import { useEffect, useState } from "react";
import AuthorCard from "../components/author-card";
import CardLoader from "../components/author-card/card-loader";
import Loader from "../components/loader/loader";
import Pagination from "../components/pagination";

export default function Home() {
	const [loading, setLoading] = useState(true);
	const [authors, setAuthors] = useState([]);
	const [lastIndex, setLastIndex] = useState(0);
	const [page, setPage] = useState(1);

	const [loadFromLocalStorage, setLoadFromLocalStorage] = useState([]);

	const getList = async (index) => {
		setLoading(true);
		try {
			const res = await fetch(
				`https://api.quotable.io/authors?limit=12&skip=${index}`,
				{
					method: "GET",
				}
			);

			const { results, lastItemIndex, page } = await res.json();
			setAuthors(results);
			setLastIndex(lastItemIndex);
			setPage(page);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	const next = () => {
		getList(lastIndex);
	};
	const prev = () => {
		getList(lastIndex - 20);
	};

	const addToFav = (newauthor) => {
		const updatedAuthor = [...loadFromLocalStorage];
		updatedAuthor.push(newauthor);
		setLoadFromLocalStorage(updatedAuthor);
		localStorage.setItem("fav_author", JSON.stringify(updatedAuthor));
	};

	const removeFromFav = (author) => {
		const filterAuthor = loadFromLocalStorage.filter(
			(authorItem) => authorItem._id !== author._id
		);
		setLoadFromLocalStorage(filterAuthor);
		localStorage.setItem("fav_author", JSON.stringify([...filterAuthor]));
	};

	useEffect(() => {
		getList(lastIndex);

		const LS = localStorage.getItem("fav_author")
			? JSON.parse(localStorage.getItem("fav_author"))
			: [];

		setLoadFromLocalStorage(LS);
	}, []);

	return (
		<>
			<section className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 p-5 gap-5">
				{loading ? (
					<Loader />
				) : (
					<>
						{authors.length > 0 && (
							<>
								{authors.map((author, index) => (
									<AuthorCard
										key={index}
										author={author}
										addToFav={addToFav}
										removeFromFav={removeFromFav}
										loadFromLocalStorage={loadFromLocalStorage}
									/>
								))}
							</>
						)}
					</>
				)}
			</section>

			<section className="p-5 flex justify-center">
				<Pagination page={page} prev={prev} next={next} />
			</section>
		</>
	);
}
