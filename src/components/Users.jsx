import { observer } from 'mobx-react-lite';

import { useUsersStore } from '../hooks/useStore';

import User from './User';
import NewUser from './NewUser';

const Users = () => {
	const { users } = useUsersStore();

	return (
		<section className="users">
			<h1 className="users__title">List of users</h1>
			<NewUser />
			<ul className="users__list">
				{users.map((user) => <User key={user.id} user={user} />)}
			</ul>
		</section>
	)
};

export default observer(Users);
