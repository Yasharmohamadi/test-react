import { FaRecycle   } from "react-icons/fa";

export default function ChangeNames({ onClick }) {
	return (
		<button onClick={onClick}>
			<h3>Change  <FaRecycle /> Names</h3>
			
		</button>
	);
}
