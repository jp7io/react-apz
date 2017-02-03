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
    default:
      return state;
  }
};
