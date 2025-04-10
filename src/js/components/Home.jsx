import React from "react";
import { TarjetaDeMago } from "./TarjetaDeMago.jsx";

import {ListaDeLaCompra} from "./ListaDeLaCompra.jsx"

//create your first component
const Home = () => {
	return (
		<div className="text-center">
            <TarjetaDeMago/>
			<ListaDeLaCompra/>
		</div>
	);
};

export default Home;