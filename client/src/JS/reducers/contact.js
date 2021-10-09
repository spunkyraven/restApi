import {
  GET_ALL_CONTACT,
  GET_CONTACT,
  GET_CONTACT_FAIL,
  GET_CONTACT_LOAD,
} from "../constants/contacts";

const initialState = {
  contacts: [],
  isLoad: false,
  isError: false,
  contact: {},
};

const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CONTACT_LOAD:
      return { ...state, isLoad: true };
    case GET_ALL_CONTACT:
      return {
        ...state,
        contacts: payload.contacts,
        isLoad: false,
        isError: false,
      };
    case GET_CONTACT:
      return {
        ...state,
        contact: payload.contact,
        isLoad: false,
        isError: false,
      };
    case GET_CONTACT_FAIL:
      return { ...state, isError: true, isLoad: false };
    default:
      return state;
  }
};

export default contactReducer;
