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
		<form onSubmit={handleSubmit} className="users__form form">
			<input
				className="form__input"
				onChange={handleChange}
				type="text"
				placeholder="Type name here..."
				required
				value={name}
			/>
			<button className="form__button">Add new user</button>
		</form>
	)
}

export default observer(NewUser);
