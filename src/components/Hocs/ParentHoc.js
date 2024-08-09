import React, { useState } from "react";

function ParentHoc(OriginalComponent, libraryTitle) {
	function NewComponent() {
		const [title, setTitle] = useState(libraryTitle);

		return <OriginalComponent title={title} />;
	}

	return NewComponent;
}

export default ParentHoc;
