import { useState } from 'react';
import { observer } from 'mobx-react-lite';

import UserEidt from './UserEidt';

const User = ({user}) => {
	const [editing, setEditing] = useState(false);

	const handleDoubleClick = () => {
		setEditing(true)
	}

	const handleSave = (name) => {
		user.edit(name);
        setEditing(false);
	}

	const handleRemoveUser = () => {
		user.remove();
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
					<span onDoubleClick={handleDoubleClick} className="users__listitem-name">{user.name}</span>
					<button onClick={handleRemoveUser} className="users__listitem-button">Remove</button>
				</>
			)}
		</li>
	)
}

export default observer(User);
