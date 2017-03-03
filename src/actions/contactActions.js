import { standardFetch, standardAdd, standardEdit, standardDelete } from './standardActions';

export const contactFetch = () => standardFetch('/contacts', 'CONTACT_FETCH');

export const contactAdd = contact => standardAdd('/contacts', 'contact', 'CONTACT_ADD', contact);

export const contactEdit = contact => standardEdit(`/contacts/${contact.id}`, 'contact', 'CONTACT_EDIT', contact);

export const contactDelete = id => standardDelete(`/contacts/${id}`, 'id', 'CONTACT_DELETE', id);
