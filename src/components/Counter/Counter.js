export default function Counter({count, add, sub}) {
	return (
		<div>
			<button>
				<h2 onClick={sub}>-</h2>
			</button>
			<button>
				<h2>{count}</h2>
			</button>
			<button>
				<h2 onClick={add}>+</h2>
			</button>
		</div>
	);
}
