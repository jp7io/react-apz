const initialState = {
  contactList: [],
  loading: false
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contact_add':
      return {
          ...state,
        contactList: state.contactList.concat(action.contact)
      };
    case 'contact_delete':
      return {
          ...state,
          contactList: [
              ...state.contactList.slice(0, action.index),
              ...state.contactList.slice(action.index + 1)
          ]
      };
    case 'contact_edit':
      const index = state.contactList.findIndex(c => c.id === action.contact.id);
      return {
          ...state,
          contactList: [
              ...state.contactList.slice(0, index),
              action.contact,
              ...state.contactList.slice(index + 1)
          ]
      };
    default:
      return state;
  }
};
