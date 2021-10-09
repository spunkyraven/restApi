import { Button, TextField } from "@mui/material";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";

import { addContact, editContact, getContact } from "../JS/actions/contacts";

const AddContact = () => {
  const [contact, setContact] = useState({});
  const [edit, setedit] = useState(false);

  const editContactState = useSelector((state) => state.contactReducer.contact);

  const dispatch = useDispatch();

  const params = useParams();
  const history = useHistory();
  /////////////////////////////
  useEffect(() => {
    if (params.id) {
      dispatch(getContact(params.id));
    }
  }, [params.id, dispatch]);

  useEffect(() => {
    if (params.id) {
      setedit(true);
    } else {
      setedit(false);
    }
    edit
      ? setContact(editContactState)
      : setContact({ name: "", lastName: "", phone: "", email: "" });
  }, [edit, editContactState, params.id]);
  ///////////////////////////////////////
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  /////////////////////////////////////////////////
  const handleContact = () => {
    if (contact.email && contact.name) {
      if (edit) {
        dispatch(editContact(params.id, contact, history));
      } else {
        dispatch(addContact(contact, history));
      }
    } else {
      alert("email and required");
    }
  };
  return (
    <form>
      <h2>{edit ? "EDIT The Contact" : "Add a new Contact"}</h2>
      <TextField
        id="outlined-number"
        label="name"
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleChange}
        name="name"
        value={contact.name}
      />
      <TextField
        id="outlined-number"
        label="last Name"
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
        name="lastName"
        onChange={handleChange}
        value={contact.lastName}
      />{" "}
      <TextField
        id="outlined-number"
        label="email"
        type="text"
        name="email"
        InputLabelProps={{
          shrink: true,
        }}
        value={contact.email}
        onChange={handleChange}
      />{" "}
      <TextField
        id="outlined-number"
        label="phone Number"
        type="number"
        name="phone"
        InputLabelProps={{
          shrink: true,
        }}
        value={contact.phone}
        onChange={handleChange}
      />
      <Button onClick={handleContact}>{edit ? "EDIT" : "SAVE"}</Button>
    </form>
  );
};

export default AddContact;
