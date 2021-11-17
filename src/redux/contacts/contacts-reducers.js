import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  setFilter,
  importContacts,
} from "./contacts-actions";

const itemsReducer = createReducer([], {
  [importContacts]: (state, action) => [...action.payload],
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    [...state].filter((item) => item.id !== action.payload),
});

const filterReducer = createReducer("", {
  [setFilter]: (state, action) => action.payload,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
