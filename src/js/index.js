//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application
let contador = 0;
setInterval(() => {
	let sextoNum = Math.floor(contador / 100000) % 10;
	let quintoNum = Math.floor(contador / 10000) % 10;
	let cuartoNum = Math.floor(contador / 1000) % 10;
	let tercerNum = Math.floor(contador / 100) % 10;
	let segundoNum = Math.floor(contador / 10) % 10;
	let primerNum = Math.floor(contador / 1) % 10;

	contador++;
	ReactDOM.render(
		<Home
			primero={primerNum}
			segundo={segundoNum}
			tercero={tercerNum}
			cuarto={cuartoNum}
			quinto={quintoNum}
			sexto={sextoNum}
		/>,
		document.querySelector("#app")
	);
}, 1000);
