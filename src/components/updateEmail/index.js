import { useState } from "react";
import { updateEmail } from "../../utils";

export const UpdateEmail = ( { setUpdateEmail, isLoggedIn } ) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        updateEmail(username, email, password, setUpdateEmail, isLoggedIn)
    }

    return(
        <form onSubmit={submitHandler}>
            <h2>Update your email address here</h2>
            <input defaultValue={"New Email"} onChange={(e) => setEmail(e.target.value)} />
            <input defaultValue={"Password"} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Update</button>
        </form>
    )
};