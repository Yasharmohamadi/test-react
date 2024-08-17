import React, { useState } from "react";

export default function ToggleHoc(OriginalComponent) {
	function NewComponent() {
		const [isShow, setIsShow] = useState(false);
		const toggleHandler = () => {
			setIsShow((prevValue) => !prevValue);
		};
		return <OriginalComponent isShow={isShow} toggleHandler={toggleHandler} />;
	}

	return NewComponent;
}