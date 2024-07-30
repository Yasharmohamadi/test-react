import Alert from "@mui/material/Alert";
import { Container } from "react-bootstrap";

export default function BasicButtons() {
	return (
		<Container>
			<Alert severity="success">This is a success Alert.</Alert>
			<br />
			<Alert variant="filled" severity="success">
				This is a filled success Alert.
			</Alert>
			<br />

			<br />
			<Alert severity="info">This is an info Alert.</Alert>
			<br />
			<Alert variant="filled" severity="info">
				This is a filled info Alert.
			</Alert>
			<br />
			<Alert severity="warning">This is a warning Alert.</Alert>
			<br />
			<Alert variant="filled" severity="warning">
				This is a filled warning Alert.
			</Alert>
			<br />
			<Alert severity="error">This is an error Alert.</Alert>

			<br />
			<Alert variant="filled" severity="error">
				This is a filled error Alert.
			</Alert>
		</Container>
	);
}
