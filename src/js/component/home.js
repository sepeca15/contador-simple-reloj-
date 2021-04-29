import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Home(props) {
	return (
		<div className="container bg-dark p-2">
			<div className="container-fluid row bg-dark d-flex justify-content-between">
				<div className="col-2 card bg--negro">
					<i className="far fa-clock textsize mx-auto my-auto"></i>
				</div>
				<div className="col-1 card textsize align-middle bg--negro">
					{props.sexto}
				</div>
				<div className="col-1 card textsize align-middle bg--negro">
					{props.quinto}
				</div>
				<div className="col-1 card textsize align-middle bg--negro">
					{props.cuarto}
				</div>
				<div className="col-1 card textsize align-middle bg--negro">
					{props.tercero}
				</div>
				<div className="col-1 card textsize align-middle bg--negro">
					{props.segundo}
				</div>
				<div className="col-1 card textsize align-middle bg--negro">
					{props.primero}
				</div>
			</div>
		</div>
	);
}

Home.propTypes = {
	sexto: PropTypes.string,
	quinto: PropTypes.string,
	cuarto: PropTypes.string,
	tercero: PropTypes.string,
	segundo: PropTypes.string,
	primero: PropTypes.string
};
