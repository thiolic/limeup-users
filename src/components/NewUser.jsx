import { useState } from 'react';
import { observer } from 'mobx-react-lite';

import { useUsersStore } from '../hooks/useStore';

const NewUser = () => {
	const { addUser } = useUsersStore();
	const [name, setName] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		addUser({
			id: +`${Math.floor(Math.random() * 900000000 + 100000000)}`,
			name,
		});

		setName('');
	}

	const handleChange = ({ target }) => {
		setName(target.value);
	}

	return (
		<form onSubmit={handleSubmit}>
			<input onChange={handleChange} type="text" placeholder="Type name here..." required value={name} />
			<button>Add new user</button>
		</form>
	)
}

export default observer(NewUser);
