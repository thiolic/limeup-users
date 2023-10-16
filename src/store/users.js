import { createContext } from 'react';
import { destroy, onSnapshot } from 'mobx-state-tree';

import Users from '../models/Users';

const localStorageKey = 'limeup-users';

const initialState = localStorage.getItem(localStorageKey)
	? JSON.parse(localStorage.getItem(localStorageKey))
	: {
		users: [
			{
				id: 1,
				name: 'Laura',
				blocked: false,
			},
			{
				id: 2,
				name: 'Jack',
				blocked: false,
			},
		]
	};

let store;
let snapshotListenerDestroyer;

const createUsersStore = (snapshot) => {
	if (snapshotListenerDestroyer) {
		snapshotListenerDestroyer();
	}

	if (store) {
		destroy(store);
	}

	window.store = store = Users.create(snapshot)

	snapshotListenerDestroyer = onSnapshot(store, (snapshot) =>
		localStorage.setItem(localStorageKey, JSON.stringify(snapshot))
	)

	return store;
}

export const usersStore = createUsersStore(initialState);
export const UsersStoreContext = createContext(usersStore);
export const Provider = UsersStoreContext.Provider;
