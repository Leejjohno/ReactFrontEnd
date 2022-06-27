import { useState } from "react";
import { deleteUser } from "../../utils";

export const DeleteUser = ( { setDeleteUser, isLoggedIn } ) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        deleteUser(username, password, setDeleteUser, isLoggedIn)
    }
    
        return(
            <form onSubmit={submitHandler}>
                <h2>Delete your account here</h2>
                <div>{isLoggedIn}</div>
                <input defaultValue={"Username"} onChange={(e) => setUsername(e.target.value)} />
                <input defaultValue={"Password"} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Delete Account</button>
            </form>
        )
}
