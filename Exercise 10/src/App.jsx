import { useState } from "react"
import UserList from "./UserList"


const App = ()=>{

    const users = [
        {
            id:1,name:'Abdulahi',city:'Galkaio',

        },
        {
            id:2,name:'Moha',city:'Galkaio',
        },
        {
            id:2,name:'Moha',city:'Galkaio',
        }
    ]


    return(
        <div>
            <UserList users={users}/>
        </div>
    )
}

export default App