import React, { FC, useState, useRef } from 'react';

const EventsExample: FC = () => {
	const [value, setValue] = useState<string>('');
	const [isDrag, setIsDrag] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};
	const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log(value);
	};
	const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
		// console.log('It"s alive');
	};
	const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDrag(false);
		console.log('DROP');
	};
	const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDrag(false);
	};
	const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDrag(true);
	};
	const click1Handler = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log(inputRef.current?.value);
	};
	return (
		<div>
			<input ref={inputRef} type="text" placeholder="input1" />
			<button onClick={click1Handler}>click</button>
			<input
				value={value}
				onChange={changeHandler}
				type="text"
				placeholder="input2"
			/>
			<button onClick={clickHandler}>click</button>
			<div
				onDrag={dragHandler}
				draggable
				style={{
					width: 200,
					height: 200,
					background: 'orangered',
					marginBottom: '1rem',
				}}
			></div>
			<div
				onDrop={dropHandler}
				onDragLeave={leaveHandler}
				onDragOver={dragWithPreventHandler}
				style={{
					width: 200,
					height: 200,
					background: isDrag ? 'blue' : 'orangered',
					marginBottom: '1rem',
				}}
			></div>
		</div>
	);
};

export default EventsExample;
