import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const VistaPrevia = () => {
	const { store, actions } = useContext(Context);

	actions.loadData();

	return (
		<div className="row col-10">
			<div className="col-2 mb-4">
				<div className="card">
					<img src="https://via.placeholder.com/140x100" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
					</div>
					<div className="card-footer">
						<small className="text-muted">Last updated 3 mins ago</small>
					</div>
				</div>
			</div>
			<div className="col-2 mb-4">
				<div className="card">
					<img src="https://via.placeholder.com/140x100" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
					</div>
					<div className="card-footer">
						<small className="text-muted">Last updated 3 mins ago</small>
					</div>
				</div>
			</div>
			<div className="col-2 mb-4">
				<div className="card">
					<img src="https://via.placeholder.com/140x100" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
					</div>
					<div className="card-footer">
						<small className="text-muted">Last updated 3 mins ago</small>
					</div>
				</div>
			</div>
			<div className="col-2 mb-4">
				<div className="card">
					<img src="https://via.placeholder.com/140x100" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
					</div>
					<div className="card-footer">
						<small className="text-muted">Last updated 3 mins ago</small>
					</div>
				</div>
			</div>
			<div className="col-2 mb-4">
				<div className="card">
					<img src="https://via.placeholder.com/140x100" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
					</div>
					<div className="card-footer">
						<small className="text-muted">Last updated 3 mins ago</small>
					</div>
				</div>
			</div>
			<div className="col-2 mb-4">
				<div className="card">
					<img src="https://via.placeholder.com/140x100" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
					</div>
					<div className="card-footer">
						<small className="text-muted">Last updated 3 mins ago</small>
					</div>
				</div>
			</div>
			<div className="col-2 mb-4">
				<div className="card">
					<img src="https://via.placeholder.com/140x100" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
					</div>
					<div className="card-footer">
						<small className="text-muted">Last updated 3 mins ago</small>
					</div>
				</div>
			</div>
			<div className="col-2 mb-4">
				<div className="card">
					<img src="https://via.placeholder.com/140x100" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
					</div>
					<div className="card-footer">
						<small className="text-muted">Last updated 3 mins ago</small>
					</div>
				</div>
			</div>
			<div className="col-2 mb-4">
				<div className="card">
					<img src="https://via.placeholder.com/140x100" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
					</div>
					<div className="card-footer">
						<small className="text-muted">Last updated 3 mins ago</small>
					</div>
				</div>
			</div>
			<div className="col-2 mb-4">
				<div className="card">
					<img src="https://via.placeholder.com/140x100" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
					</div>
					<div className="card-footer">
						<small className="text-muted">Last updated 3 mins ago</small>
					</div>
				</div>
			</div>
			<div className="col-2 mb-4">
				<div className="card">
					<img src="https://via.placeholder.com/140x100" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
					</div>
					<div className="card-footer">
						<small className="text-muted">Last updated 3 mins ago</small>
					</div>
				</div>
			</div>
			<div className="col-2 mb-4">
				<div className="card">
					<img src="https://via.placeholder.com/140x100" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
					</div>
					<div className="card-footer">
						<small className="text-muted">Last updated 3 mins ago</small>
					</div>
				</div>
			</div>
			<div className="col-2 mb-4">
				<div className="card">
					<img src="https://via.placeholder.com/140x100" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
					</div>
					<div className="card-footer">
						<small className="text-muted">Last updated 3 mins ago</small>
					</div>
				</div>
			</div>
			<div className="col-2 mb-4">
				<div className="card">
					<img src="https://via.placeholder.com/140x100" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
					</div>
					<div className="card-footer">
						<small className="text-muted">Last updated 3 mins ago</small>
					</div>
				</div>
			</div>
		</div>
	);
};
