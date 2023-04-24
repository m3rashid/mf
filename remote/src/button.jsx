import { useState } from 'react';
import "./button.css"

const Button = () => {
	const [state, setState] = useState(0);

	return (
		<div>
			<button
				className='sharedBtn'
				onClick={() => setState((count) => count + 1)}
			>
				Remote App Button: {state}
			</button>
		</div>
	);
};

export default Button;
