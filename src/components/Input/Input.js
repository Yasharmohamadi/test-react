export default function Input ({value, onChange}) {
    return (
        <div>
            <input style={{padding: 10, borderRadius: 5, fontSize: 20}} maxLength={10} placeholder="Type anything here ..." onChange={onChange}/>
            <h3>{value}</h3>
        </div>
    )
}