import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { List } from "../component/list.js";
import { VistaPrevia } from "../component/thumbnails.js";

export const Home = () => (
	<div className="text-center mt-5">
		<br />
		<br />
		<br />
		<br />
		<br />
		<div className="row">
			<List />
			<VistaPrevia />
		</div>
	</div>
);
