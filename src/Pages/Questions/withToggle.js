import React, { useState } from "react";

export default function withToggle(OriginalComponent) {
	function NewComponent(props) {

		const [showInfos, setShowInfos] = useState(false);

		const showHandler = () => {
			setShowInfos((prevValue) => !prevValue);
		};
	
		return <OriginalComponent showInfos={showInfos} showHandler={showHandler} {...props}/>;
	}

	return NewComponent;
}
