import { useState } from "react";
import { Table, Container, Alert } from "react-bootstrap";

export default function Comments() {
	const [coms, setComs] = useState([]);

	fetch("https://jsonplaceholder.typicode.com/todos", {
		method: "GET",
	})
		.then((response) => response.json())
		.then((data) => setComs(data))
        .catch((err) => console.log(err));


    const removeHandler = (comID) => {
        setComs(prevComs => {
            let filteredComs = prevComs.filter(com => {
                return com.id !== comID
            })

            return filteredComs
        })
        console.log(comID);
    }

	return (
		<Container className="mt-5">
			{coms.length > 0 ? (
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>ID</th>
							<th>Comment</th>
						</tr>
					</thead>
					<tbody>
						{coms.map((com) => (
							<tr key={com.id} onClick={() => removeHandler(com.id)}>
								<td>{com.id}</td>
								<td>{com.title}</td>
							</tr>
						))}
					</tbody>
				</Table>
			) : (
				<Alert variant="danger">Your database is not correct !</Alert>
			)}
		</Container>
	);
}
