export default function CheckBox ({checked, onChange}) {
    return (
        <div>
            <label style={{fontSize: 20}} htmlFor="checkbox">Check Box</label>
            <input checked={checked} type="checkbox" id="checkbox" onChange={onChange} />
        </div>
    )
}