import PropTypes from "prop-types";
import React from "react";

const SecondsCounter = (props) => {

	const digit = props.seconds.toString().padStart(6, '0').split('');

	return (
		<div className="m-0 px-1 py-3 row text-center">
			<i className="mb-3 mb-xxl-5 far fa-clock"></i>
			<h1 className="row mx-auto">
				{digit.map((d, index) => (
					<span className="mx-0 mx-sm-2 mx-xxl-3 rounded col text-light bg-dark" key={index}>{d}</span>
				))}
			</h1 >
			<div className="col-10 my-3 my-xxl-5 mx-auto">
				<button className="m-2 m-xxl-4 px-5 py-2 rounded bg-success fw-semibold" onClick={() => props.cbInterval()}>Start</button>
				<button className="m-2 m-xxl-4 px-5 py-2 rounded bg-danger fw-semibold" onClick={() => props.cbClear(props.counterId)}>Stop</button>
			</div>
		</div >
	);

};

SecondsCounter.propTypes = {
	seconds: PropTypes.number,
	counterId: PropTypes.number,
	cbInterval: PropTypes.func,
	cbClear: PropTypes.func,
}

export default SecondsCounter;
