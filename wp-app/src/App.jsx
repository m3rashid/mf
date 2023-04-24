import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import ButtonModule from "remote/button"
const Button = ButtonModule.default
console.log(Button)


const App = () => {
	return (
		<div className='app'>
			<div>Name: wp-app</div>
			<div>Framework: react</div>
			<div>Language: JavaScript</div>
			<div>CSS: Empty CSS</div>
			<Button />
		</div>
	)
};

ReactDOM.createRoot(document.getElementById('app')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

