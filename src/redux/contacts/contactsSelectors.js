import { createSelector } from "@reduxjs/toolkit";

const getContactSelector = state => state.contacts.contacts;
const filterContactSelector = state => state.contacts.filter;
const loaderContactSelector = state => state.contacts.isContactLoading;
const errorContactSelector = state => state.contacts.error;

const getFilteringContacts = createSelector(
  [getContactSelector, filterContactSelector],
  (contacts, filter) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }
);
export { getContactSelector, filterContactSelector, loaderContactSelector, errorContactSelector, getFilteringContacts };