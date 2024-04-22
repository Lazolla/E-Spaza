import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';

const UserProfile=()=>{
    const {user,isAuthenticated}=useAuth0();
    return(
        isAuthenticated &&(
            <article className="column">
                {user?.picture && <img src={user.picture} alt={user?.name}></img>}
                <h2>{user?.name}</h2>
                <p>Email: {user?.email}</p>
                <p>Nickname: {user?.nickname}</p>

            </article>
        )
     
    )
}

export default UserProfile