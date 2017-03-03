import { reduceFetch, reduceAdd, reduceEdit, reduceDelete } from './helpers';

const initialState = {
  contactList: [],
  loading: false
};

const key = 'contactList';

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CONTACT_FETCH':
      return reduceFetch(state, action.contacts, key);

    case 'CONTACT_ADD':
      return reduceAdd(state, action.contact, key);

    case 'CONTACT_EDIT':
      return reduceEdit(state, action.contact, key);

    case 'CONTACT_DELETE':
      return reduceDelete(state, action.id, key);

    default:
      return state;
  }
};

export default contactsReducer;
