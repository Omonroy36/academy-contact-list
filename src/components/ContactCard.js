import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import MikePhoto from "../m101.jpg";

export const ContactCard = props => {
	const [state, setState] = useState({
		//initialize state here
	});

	return (
		<li className="list-group-item">
			<div className="row w-100 justify-content-between">
				<div className="col-12 col-sm-4 col-md-3 px-0">
					<img src={MikePhoto} alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" />
				</div>
				<div className="col-12 col-sm-4 col-md-3 text-center text-sm-left">
					<label className="name lead">Mike Anamendolla</label>
					<br />
					<i className="fas fa-map-marker-alt text-muted mr-3" />
					<span className="text-muted">5842 Hillcrest Rd</span>
					<br />
					<span
						className="fa fa-phone fa-fw text-muted mr-3"
						data-toggle="tooltip"
						title=""
						data-original-title="(870) 288-4149"
					/>
					<span className="text-muted small">(870) 288-4149</span>
					<br />
					<span
						className="fa fa-envelope fa-fw text-muted mr-3"
						data-toggle="tooltip"
						data-original-title=""
						title=""
					/>
					<span className="text-muted small text-truncate">mike.ana@example.com</span>

				</div>
				<div className="col-12 col-sm-4 col-md-3 d-flex justify-content-end align-items-center">
					<button className="btn btn-primary">Editar</button>
					<button className="btn btn-danger" onClick={() => props.onDelete()}>Eliminar</button>
				</div>
			</div>
		</li>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	onDelete: null
};
