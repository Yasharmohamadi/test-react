export default function Counter({count, add, sub}) {
	return (
		<div>
			<button onClick={sub}>
				<h2>-</h2>
			</button>
			<button>
				<h2>{count}</h2>
			</button>
			<button onClick={add}>
				<h2>+</h2>
			</button>
		</div>
	);
}
