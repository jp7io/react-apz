const initialState = {
  name: '',
  phone: '',
  email: ''
};

export const contactFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contact_form_update':
      return {
          ...state,
          [action.payload.prop]: action.payload.value
      };
    case 'contact_add':
      return {
          ...state,
          ...initialState
      };
    default:
      return state;
  }
};
