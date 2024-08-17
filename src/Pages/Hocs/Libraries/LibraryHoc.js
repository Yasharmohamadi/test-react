import React, { useState } from "react";

export default function LibraryHoc(OriginalComponent, libraryTitle) {
	function NewComponent() {
		const [title, setTitle] = useState(libraryTitle);

		return <OriginalComponent title={title} />;
	}

	return NewComponent;
}