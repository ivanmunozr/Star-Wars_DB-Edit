import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<div className="card-deck">
			<div className="card col-2">
				<img src="https://via.placeholder.com/140x100" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
				</div>
				<div className="card-footer">
					<small className="text-muted">Last updated 3 mins ago</small>
				</div>
			</div>
		</div>
	</footer>
);
