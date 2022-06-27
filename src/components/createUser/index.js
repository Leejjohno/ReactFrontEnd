import { useState } from "react";
import { createUser } from "../../utils";

export const CreateUser = ( { setCreateUser, setIsLoggedIn, isLoggedIn } ) => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        createUser(username, email, password, setCreateUser, setIsLoggedIn);
    };
    return(
        <div>
            <form onSubmit={submitHandler}>
                <h2>Create a new account</h2>
                <input defaultValue={"Choose username"} onChange={(e) => setUsername(e.target.value)} />
                <input defaultValue={"Your email address"} onChange={(e) => setEmail(e.target.value)} />
                <input defaultValue={"Choose a password"} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Create Account</button>
            </form>
        </div>
    )
};
