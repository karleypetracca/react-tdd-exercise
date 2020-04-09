import React, { useState } from "react";

const NewMessageForm = ({ onSend }) => {
	const [inputText, setInputText] = useState("");

	const handleChange = (event) => {
		setInputText(event.target.value);
	};

	const handleClick = () => {
		onSend(inputText);
		setInputText("");
	};

	return (
		<div>
			<input
				type="text"
				data-testid="messageText"
				onChange={handleChange}
				value={inputText}
			/>
			<button data-testid="sendButton" onClick={handleClick}>
				Send
			</button>
		</div>
	);
};

export default NewMessageForm;
