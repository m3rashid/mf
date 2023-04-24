import "./button.css"
import useCount from './store';

const Button = () => {
	const [state, setState] = useCount();

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
