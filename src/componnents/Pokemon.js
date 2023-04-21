import React, { useEffect, useState } from "react";
import styles from "./Pokemon.module.scss";

export default function Pokemon() {
	const [pokemon, setPokemon] = useState([]);

	useEffect(() => {
		async function getPokemon() {
			try {
				const response = await fetch(
					"https://backendtestevolution.onrender.com/getPokemons"
				);
				if (response.ok) {
					const pokemons = await response.json();
					setPokemon(pokemons);
					console.log(pokemons);
				}
			} catch (error) {
				console.error(error);
			}
		}
		getPokemon();
	}, []);
	return (
		<div className={`${styles.gallery}`}>
			{pokemon.map((pokemon) => (
				<div className={`${styles.containerPokemon}`} key={pokemon.id}>
					<div className={`${styles.containerInformation}`}>
						<div
							className={`${styles.containerNumName} flex-fill d-flex align-items-center`}
						>
							<h3 className={`${styles.num}`}>N°{pokemon.numDex}</h3>
							<h3 className={`${styles.name}`}>{pokemon.nom}</h3>
						</div>
					</div>
					<div className={`${styles.imagePokemon}`}>
						<img src={pokemon.image} alt={"pokemon"} />
					</div>
				</div>
			))}
		</div>
	);
}
