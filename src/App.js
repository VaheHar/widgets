import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import DropDownMenu from './components/DropDownMenu';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
	{
		title: 'What is React?',
		content: 'React is a javascript front-end framework'
	},
	{
		title: 'Why use React',
		content: 'Because it\' favorite'
	},
	{
		title: 'How do you use React',
		content: 'By creating components'
	}
];

const options = [
	{
		label: 'The Color Red',
		value: 'red'
	},
	{
		label: 'A Shade Of  Blue',
		value: 'blue'
	},
	{
		label: 'The Color Green',
		value: 'green'
	}
];


const App = () => {
	const [selected, setSelected] = useState(options[0])
	return (
		<div>
			<Header />
			<Route path='/'>
				<Accordion items={items}/>
			</Route>
			<Route path='/list'>
				<Search/>
			</Route>
			<Route path='/dropdown'>
				<DropDownMenu 
				label="Select a Color"
				options={options}
				selected={selected}
				onSelectedChange={setSelected}/>
			</Route>
			<Route path='/translate'>
				<Translate/>
			</Route>
		</div>
	);
}

export default App;