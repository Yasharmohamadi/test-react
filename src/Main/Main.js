import Users from '../Users/Users'

export default function Main () {
    let users = [
        {id: 1, name: 'Jack',},
        {id: 2, name: 'John',},
        {id: 3, name: '',}
    ]
    return (
        <div>
            <Users {...users[0]}/>
            <Users {...users[1]}>
                <span>(Child)</span>
            </Users>
            <Users/>
        </div>
    )
}