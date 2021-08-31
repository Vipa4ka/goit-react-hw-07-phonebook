import { createSelector } from 'reselect';

const getLoading = state => state.contacts.loading;
const getFilter = state => state.contacts.filter;
const getAllContacts = state => state.contacts.contacts;

// const getVisibleContacts = createSelector(
//   [getAllContacts, getFilter],
//   (contacts, filter) => {
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(normalizedFilter),
//     );
//   },
// );

const getVisibleContacts = state => {
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();
  const allContacts = getAllContacts(state);
  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getLoading,
  getFilter,
  getVisibleContacts,
};
