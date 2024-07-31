import { Alert } from "@mui/material";
import { PersonIcon } from '@mui/icons-material'
import { Container } from "react-bootstrap";

export default function BasicButtons() {
	return (
		<Container>
			<hr />
			<Alert severity="success">This is a success Alert.</Alert>
			<br />
			<Alert variant="filled" severity="success">
				This is a filled success Alert.
			</Alert>
			<hr />
			<Alert severity="info">This is an info Alert.</Alert>
			<br />
			<Alert variant="filled" severity="info">
				This is a filled info Alert.
			</Alert>
			<hr />
			<Alert severity="warning">This is a warning Alert.</Alert>
			<br />
			<Alert variant="filled" severity="warning">
				This is a filled warning Alert.
			</Alert>
			<hr />
			<Alert severity="error">This is an error Alert.</Alert>
			<br />
			<Alert variant="filled" severity="error">
				This is a filled error Alert.
			</Alert>
		</Container>
	);
}
