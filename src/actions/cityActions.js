import { standardFetch, standardAdd, standardEdit, standardDelete } from './standard/CrudActions';

export const cityFetch = () => standardFetch('/api/cities', 'CITY_FETCH');

export const cityAdd = city => standardAdd('/api/cities', 'city', 'CITY_ADD', city);

export const cityEdit = city => standardEdit(`/api/cities/${city._id}`, 'city', 'CITY_EDIT', city);

export const cityDelete = id => standardDelete(`/api/cities/${id}`, 'id', 'CITY_DELETE', id);
