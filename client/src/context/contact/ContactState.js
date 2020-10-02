import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "first contact",
        email: "first@gmail.com"
        phone: "111-111-1111",
        type: "personal"
      },
      {
        id: 2,
        name: "second contact",
        email: "second@gmail.com"
        phone: "222-222-2222",
        type: "personal"
      },
      {
        id: 3,
        name: "third contact",
        email: "third@gmail.com"
        phone: "333-333-3333",
        type: "personal"
      },
    ],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // Add Contact

  // Delete Contact

  // Set Current Contact 

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider value={{ 
      contacts: state.contacts
    }}>
      { props.children }
    </ContactContext.Provider>
  )
};

export default ContactState