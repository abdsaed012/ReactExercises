
const Users = ({users})=>{
    return(
        <div>

            {users.length >0 ? (
                <div>
                    <h2>Users List</h2>
                    <ul>
                        {users.map((user)=> (
                            <li>{user.name}, {user.city}</li>
                        ) )}
                    </ul>
                </div>
            ) : (
                <p>No users available</p>
            )}
            
        </div>
    )
}


export default Users;