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
		<li >
			{editing ? (
				<UserEidt
					name={user.name}
					editing={editing}
					onSave={(name) => handleSave(name)}
				/>
			) : (
				<div>
					<span onDoubleClick={handleDoubleClick}>{user.name}</span>
					<button onClick={handleRemoveUser}>Remove</button>
				</div>
			)}
		</li>
	)
}

export default observer(User);
