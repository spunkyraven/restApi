import React from "react";
import "./ContactCard.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { deleteContact, getContact } from "../JS/actions/contacts";
import { Link } from "react-router-dom";

const ContactCard = ({ contact }) => {
  const dispatch = useDispatch();
  // ------
  // function to delete the contact
  const handleDelete = () => {
    const result = window.confirm("Are you sure to delete that?");
    if (result) {
      dispatch(deleteContact(contact._id));
    }
  };
  const handleContact = () => {
    dispatch(getContact(contact._id));
  };
  return (
    <div className="container">
      <div className="card">
        <div className="card-head">
          <img
            className="avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhhklLpQnJpmdcRWm07dxiiIp22D9ZaFlhzNF5S7EMPxEinocq&usqp=CAU"
            alt="Username"
          />
        </div>
        <div className="card-body">
          <div>
            <span className="Student-name">
              {contact.name || ""} <b>{contact.lastName}</b>
              <span className="badge">PRO</span>
            </span>
            <span className="username">@{contact.phoneNumber}</span>
          </div>
          <div className="student-infos">
            <span className="Student-description">
              <p>{contact.email}</p>
            </span>
          </div>
          <div className="btn-card">
            <Link to={`/editContact/${contact._id}`}>
              <EditIcon onClick={handleContact} />
            </Link>
            <DeleteIcon onClick={handleDelete} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
