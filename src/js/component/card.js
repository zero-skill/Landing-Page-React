import React from "react";
import PropTypes from "prop-types";
function Card(props) {
	return (
		<div className="card col-md-3 col-sm-12" style={{ width: "18rem" }}>
			<img src={props.imgUrl} className="card-img-top mt-3" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.textDescription}</p>
				<a href={props.link} className="btn btn-primary">
					{props.textLink}
				</a>
			</div>
		</div>
	);
}
Card.propTypes = {
	imgUrl: PropTypes.string,
	title: PropTypes.string,
	textDescription: PropTypes.string,
	link: PropTypes.string,
	textLink: PropTypes.string
};

export default Card;
