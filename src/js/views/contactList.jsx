import React from "react";
import { Link } from "react-router-dom";
import { Contact } from "../component/contactCard.jsx";

export const ContactList = () => {


	return (
		<div className="container-fluid">
			<h1 className="text-center align-items-center mt-5 border border-4 border-success ">Contact List</h1>
			<Link className="d-flex align-items-end text-decoration-none" to="/addContact">
				<button className="btn btn-secondary text-light ms-auto m-3">Add contact</button>
			</Link>
			<div className="container-fluid">
				<Contact />
			</div>
		</div>
	);
};
