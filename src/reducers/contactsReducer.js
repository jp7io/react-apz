import { reduceFetch, reduceAdd, reduceEdit, reduceDelete } from './helpers';

const initialState = {
  contactList: [],
  loading: false
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CONTACT_FETCH':
      return reduceFetch(state, action.contacts, 'contactList');

    case 'CONTACT_ADD':
      return reduceAdd(state, action.contact, 'contactList');

    case 'CONTACT_EDIT':
      return reduceEdit(state, action.contact, 'contactList');

    case 'CONTACT_DELETE':
      return reduceDelete(state, action.id, 'contactList');

    default:
      return state;
  }
};

export default contactsReducer;
