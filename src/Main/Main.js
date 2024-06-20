import Users from '../Users/Users'

export default function Main () {
    let users = [
        {id: 1, name: 'Yashar',},
        {id: 2, name: 'Mojtaba',},
        {id: 3, name: 'Arshia',}
    ]
    return (
        <div>
            <Users {...users[0]}/>
            <Users {...users[1]}>
                <span>(Child)</span>
            </Users>
            <Users {...users[2]}/>
        </div>
    )
}