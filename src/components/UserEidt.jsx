import { useState } from 'react';

const UserEidt = ({ name, onSave }) => {
	const [editingName, setEditingName] = useState(name);

	const handleSubmit = ({ target, key }) => {
		const name = target.value.trim();

		if (key === 'Enter') {
			onSave(name);
		}
	}

	const handleChange = ({ target }) => {
		setEditingName(target.value);
	}

	const handleBlur = ({ target }) => {
		onSave(target.value);
	}

	return (
		<input
			className="users__listitem-input"
			type="text"
			autoFocus={true}
			value={editingName}
			onBlur={handleBlur}
			onChange={handleChange}
			onKeyDown={handleSubmit}
		/>
	)
}

export default UserEidt;
