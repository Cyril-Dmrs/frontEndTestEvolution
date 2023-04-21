import styles from "./App.module.scss";
import Evolution from "./componnents/Evolution";
import Pokemon from "./componnents/Pokemon";

function App() {
	return (
		<div className={`d-flex flex-column ${styles.appContainer}`}>
			<Pokemon />
			<Evolution />
		</div>
	);
}

export default App;
