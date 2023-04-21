import React, { useEffect, useState } from "react";

export default function Evolution() {
	const [evolution, setEvolution] = useState([]);

	useEffect(() => {
		async function getEvolution() {
			try {
				const response = await fetch(
					"https://backendtestevolution.onrender.com/getEvolution"
				);
				if (response.ok) {
					const evol = await response.json();
					setEvolution(evol);
					console.log(evol);
				}
			} catch (error) {
				console.error(error);
			}
		}
		getEvolution();
	}, []);
	return evolution.map((evol) => (
		<div key={evol.id} className="m20">
			<h3>N°{evol.numDex}</h3>
			<h3>{evol.nom}</h3>
			<img src={evol.image} alt={"pokemon"} />
		</div>
	));
}
