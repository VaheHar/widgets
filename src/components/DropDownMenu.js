import React, { useState, useEffect, useRef } from "react";

const DropDownMenu = ({ label, options, selected, onSelectedChange }) => {
	const [open, setOpen] = useState(false);
	const ref = useRef();

	useEffect(() => {
		const onBodyClick = (e) => {
			if (ref.current.contains(e.target))
				return;
			setOpen(false);
		}
		document.body.addEventListener('click', onBodyClick
		, { capture: true });
		return () => {
			document.body.removeEventListener('click', onBodyClick);
		}
	}, []);

	const renderedOptions = options.map((option) => {
		if (option.label === selected.label)
			return null;
		return (
			<div onClick={() => onSelectedChange(option)} key={option.value} className="item">
				{option.label}
			</div>
		);
	});
	return (
		<div ref={ref} className="ui form">
			<div className="field">
				<label className="label">{label}</label>
				<div
					className={`ui selection dropdown ${open ? 'visible active' : ''}`}
					onClick={() => setOpen(!open)}>
					<i className="dropdown icon"></i>
					<div className="text">{selected.label}</div>
					<div className={`menu ${open ? 'visible transition' : ''}`}>
						{renderedOptions}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DropDownMenu;