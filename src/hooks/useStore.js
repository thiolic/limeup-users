import { useContext } from 'react';
import { UsersStoreContext } from '../store/users';

export const useUsersStore = () => useContext(UsersStoreContext);
