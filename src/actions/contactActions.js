import { standardFetch, standardAdd, standardEdit, standardDelete } from './standard/CrudActions';

export const contactFetch = () => standardFetch('/api/contacts', 'CONTACT_FETCH');

export const contactAdd = contact => standardAdd('/api/contacts', 'contact', 'CONTACT_ADD', contact);

export const contactEdit = contact => standardEdit(`/api/contacts/${contact._id}`, 'contact', 'CONTACT_EDIT', contact);

export const contactDelete = id => standardDelete(`/api/contacts/${id}`, 'id', 'CONTACT_DELETE', id);
