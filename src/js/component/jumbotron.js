import React from "react";
function Jumbotron() {
	return (
		<div className="jumbotron">
			<div class="jumbotron">
				<h1 class="display-4">A Warm Welcome!</h1>
				<p class="lead">
					This is a simple hero unit, a simple jumbotron-style
					component for calling extra attention to featured content or
					information.
				</p>
				<hr class="my-4">
					<p>
						This is the website for 4 GEEKS the page have a lot of
						information for developments{" "}
					</p>
					<a class="btn btn-primary btn-lg" href="#" role="button">
						Call to action
					</a>
				</hr>
			</div>
		</div>
	);
}

export default Jumbotron;

ReactDOM.render(<Navbar />, document.querySelector("#app"));
