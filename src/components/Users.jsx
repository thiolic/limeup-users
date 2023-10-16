import { observer } from 'mobx-react-lite';

import { useUsersStore } from '../hooks/useStore';

import User from './User';
import NewUser from './NewUser';

const Users = () => {
	const { users } = useUsersStore();

	return (
		<>
			<NewUser />
			<ul>
				{users.map((user) => <User key={user.id} user={user} />)}
			</ul>
		</>
	)
};

export default observer(Users);
