const initialState = {
  contactList: [],
  loading: false
};

var index;

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contact_add':
      return {
          ...state,
        contactList: state.contactList.concat(action.contact)
      };
    case 'contact_delete':
      index = findContactIndex(state, action.id);
      return {
          ...state,
          contactList: [
              ...state.contactList.slice(0, index),
              ...state.contactList.slice(index + 1)
          ]
      };
    case 'contact_edit':
      index = findContactIndex(state, action.contact.id);
      return {
          ...state,
          contactList: [
              ...state.contactList.slice(0, index),
              action.contact,
              ...state.contactList.slice(index + 1)
          ]
      };
    case 'contact_fetch':
      return {
          ...state,
        contactList: action.contacts
      };
    default:
      return state;
  }
};

const findContactIndex = (state, id) => state.contactList.findIndex(c => c.id === id);
