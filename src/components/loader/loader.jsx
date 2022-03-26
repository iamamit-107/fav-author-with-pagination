import React from "react";
import CardLoader from "../author-card/card-loader";

export default function Loader() {
	return (
		<>
			{Array.from("123456789012").map((i, idx) => (
				<CardLoader key={idx} />
			))}
		</>
	);
}
