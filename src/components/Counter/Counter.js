export default function Counter({count, add, sub}) {
	return (
		<div>
			<button onClick={sub} style={{background: 'Red'}}>
				<h2>-</h2>
			</button>
			<button>
				<h2>{count}</h2>
			</button>
			<button onClick={add} style={{background: 'Green'}}>
				<h2>+</h2>
			</button>
		</div>
	);
}
