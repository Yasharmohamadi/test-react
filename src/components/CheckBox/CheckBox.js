export default function CheckBox ({checked, onChange}) {
    return (
        <div>
            <label htmlFor="checkbox">Check Box</label>
            <input checked={checked} type="checkbox" id="checkbox" onChange={onChange} />
        </div>
    )
}