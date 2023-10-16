import { types, destroy, getRoot } from 'mobx-state-tree';

const User = types
	.model({
		id: types.identifierNumber,
		name: types.string,
		blocked: false,
	})
	.actions(self => ({
		remove() {
			getRoot(self).removeUser(self);
		},
		toggle() {
			self.blocked = !self.blocked;
		},
		edit(name) {
			if (!name.length) {
				self.remove();
			} else {
				self.name = name;
			}
		},
	}));

const Users = types
	.model({
		users: types.optional(types.array(User), [])
	})
	.actions(self => ({
		addUser(user) {
			self.users.push(user);
		},
		removeUser(user) {
			destroy(user);
		},
	}));

export default Users;
