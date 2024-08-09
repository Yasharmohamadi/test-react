import React, { useState } from "react";
import Question from "./Question";
import { questionsInfos } from "../../Data";


export default function Questions() {

	const [infos, setInfos] = useState(questionsInfos)

	return (
		<div>
			{infos.map(info => (
				<Question key={info.id} {...info} />

			))}
		</div>
	);
}
