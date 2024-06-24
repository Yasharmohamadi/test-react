export default function Input ({value, onChange}) {
    return (
        <div>
            <input maxLength={10} placeholder="Type anything here ..." onChange={onChange}/>
            <h3>{value}</h3>
        </div>
    )
}