import { useState } from 'react';
import { observer } from 'mobx-react-lite';

import UserEidt from './UserEidt';

const User = ({ user }) => {
	const [editing, setEditing] = useState(false);

	const handleDoubleClick = (e) => {
		e.stopPropagation();
		setEditing(true);
	}

	const handleSave = (name) => {
		user.edit(name);
		setEditing(false);
	}

	const handleRemoveUser = () => {
		user.remove();
	}

	const handleBlockeUser = () => {
		user.toggle();
	}

	return (
		<li className="users__listitem">
			{editing ? (
				<UserEidt
					name={user.name}
					editing={editing}
					onSave={(name) => handleSave(name)}
				/>
			) : (
				<>
					<div className={`users__listitem-main ${user.blocked ? 'is-disabled' : ''}`}>
						<span onDoubleClick={handleDoubleClick} className="users__listitem-name">{user.name}</span>
						<button onClick={handleRemoveUser} className="users__listitem-button">Remove</button>
					</div>
					<button onClick={handleBlockeUser} className="users__listitem-button">Blocked</button>
				</>
			)}
		</li>
	)
}

export default observer(User);
