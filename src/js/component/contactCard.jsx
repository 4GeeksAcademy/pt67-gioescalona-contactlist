import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";




export const Contact = () => {
	const { store, actions } = useContext(Context);
	const [id, setId] = useState("");


	function deleteOneContact(element) {
		setId(element)
	}

	function confirmDelete() {
		actions.deleteContact(id);
	}

	function idUpdateContact(id, name, address, phone, email) {
		actions.setIdForUpdate(id, name, address, phone, email)
	}

	return (

		<div>
			{store.Contacts?.length === 0 && <span className="m-5 p-5 text-danger">No exists contact</span>}
			{store.Contacts.map((contact) => {
				return (
					<div key={contact.id} className="row border rounded m-2">
						<div className="col-3 col-lg-2 p-2 mx-4 my-auto">
							<img src="data:image/png;base64,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" className="card-img rounded-circle" alt="..." />
						</div>
						<div className="col p-2 my-auto">
							<div className="row d-flex">
								<div className="col-12 py-3">
									<h2 className="pt-2">{contact.name}</h2>
								</div>
								<div className="col text-secondary">
									<div className="d-flex align-items-center">
										<i className="fa-solid fa-phone"></i> {contact.phone}
									</div>
									<div className="d-flex align-items-center">
										<i className="fa-solid fa-address-book"></i> {contact.address}
									</div>
									<div className="d-flex align-items-center">
										<i className="fa-solid fa-envelope"></i> {contact.email}
									</div>
								</div>
							</div>
						</div>
						<div className="container-fluid d-flex justify-content-end mb-2 mt-2">
							<div className="d-flex align-items-start mt-3">
								<Link to="/updateContact"><button onClick={() => idUpdateContact(contact.id, contact.name, contact.address, contact.phone, contact.email)} className="btn"></button><i class="fa-solid fa-pen-to-square"></i> </Link>
							</div>
							<div className="d-flex align-items-start mt-3">
								<button onClick={() => deleteOneContact(contact.id)} className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" ><i class="fa-solid fa-trash"></i></button>
							</div>
						</div>
					</div>
				)
			})}


			<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
						If you delete it, it cannot be recovered
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">another day</button>
							<button onClick={() => confirmDelete()} type="button" className="btn btn-warning" data-bs-dismiss="modal">Yes, to be deleted</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};