//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "jquery";
import "popper.js";
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Navbar } from "./component/navbar.js";
import { Card } from "./component/card.js";

const App = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<div className="row">
					{/*Este div para almacenar las cartas*/}
					<Card
						imgUrl="https://via.placeholder.com/150"
						title="Card Title"
						textDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris sapien, porttitor a tincidunt sed, dapibus quis lorem."
						link="#"
						textLink="Find Out More!!"
					/>
					<Card
						imgUrl="https://via.placeholder.com/150"
						title="Card Title"
						textDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris sapien, porttitor a tincidunt sed, dapibus quis lorem."
						link="#"
						textLink="Find Out More!!"
					/>
					<Card
						imgUrl="https://via.placeholder.com/150"
						title="Card Title"
						textDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris sapien, porttitor a tincidunt sed, dapibus quis lorem."
						link="#"
						textLink="Find Out More!!"
					/>
					<Card
						imgUrl="https://via.placeholder.com/150"
						title="Card Title"
						textDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris sapien, porttitor a tincidunt sed, dapibus quis lorem."
						link="#"
						textLink="Find Out More!!"
					/>
				</div>
			</div>
		</>
	);
};
//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));
