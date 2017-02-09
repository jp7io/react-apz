const initialState = {
  id: '',
  name: '',
  phone: '',
  email: ''
};

export const contactFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CONTACT_FORM_UPDATE':
      return {
          ...state,
          [action.payload.prop]: action.payload.value
      };
    case 'CONTACT_ADD':
    case 'CONTACT_EDIT':
      return {
          ...state,
          ...initialState
      };
    default:
      return state;
  }
};
