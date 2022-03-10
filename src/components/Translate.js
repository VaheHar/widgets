import React, { useState } from "react";
import DropDownMenu from "./DropDownMenu";
import Convert from "./Convert";

const options = [
	{
		label: 'Afrikaans',
		value: 'af'
	},
	{
		label: 'Arabic',
		value: 'ar'
	},
	{
		label: 'Hindi',
		value: 'hi'
	},
	{
		label: 'Armenian',
		value: 'hy'
	}
];

const Translate = () => {
	const [language, setLanguage] = useState(options[0]);
	const [text, setText] = useState('');

	return (
		<div>
			<div className="ui form">
				<div className="ui field">
					<label>Enter text</label>
					<input value={text} onChange={(e) => {setText(e.target.value)}}/>
				</div>
			</div>
			<DropDownMenu
				label="Select a Language"
				selected={language}
				options={options} 
				onSelectedChange={setLanguage}/>
			<h3>Output</h3>
			<Convert text={text} language={language}/>
		</div>
	);
};

export default Translate;