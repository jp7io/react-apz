const initialState = {
  contactList: [],
  loading: false
};

var index;

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CONTACT_ADD':
      return {
          ...state,
        contactList: state.contactList.concat(action.contact)
      };
    case 'CONTACT_DELETE':
      index = findContactIndex(state, action.id);
      return {
          ...state,
          contactList: [
              ...state.contactList.slice(0, index),
              ...state.contactList.slice(index + 1)
          ]
      };
    case 'CONTACT_EDIT':
      index = findContactIndex(state, action.contact.id);
      return {
          ...state,
          contactList: [
              ...state.contactList.slice(0, index),
              action.contact,
              ...state.contactList.slice(index + 1)
          ]
      };
    case 'CONTACT_FETCH':
      return {
          ...state,
        contactList: action.contacts
      };
    default:
      return state;
  }
};

const findContactIndex = (state, id) => state.contactList.findIndex(c => c.id === id);
