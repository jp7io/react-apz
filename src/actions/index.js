import uuid from 'uuid';

export const contactFormUpdate = ({ prop, value }) => ({
  type: 'contact_form_update',
  payload: {
    prop,
    value
  }
});

export const contactAdd = contact => ({
  type: 'contact_add',
  contact: {
    id: uuid.v4(),
    ...contact
  }
});

export const contactDelete = index => ({
  type: 'contact_delete',
  index
});

export const contactEdit = contact => ({
  type: 'contact_edit',
  contact
});
