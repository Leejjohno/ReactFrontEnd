export const fetchPictures = async (setter) => {
    try {
        const res = await fetch("https://picsum.photos/v2/list");
        const data = await res.json();
        setter(data);
    } catch (error) {
        console.log(error);
    }
};

export const createUser = async (username, email, password, setCreateUser, setIsLoggedIn) => {
    try {
        const res = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                email:  email,
                password: password
            }),
        });
        const data = await res.json();
        console.log(data);
        setCreateUser(data.newUser.username);
        setIsLoggedIn(true);
        console.log(data);
    } catch (error) {
        console.log(error);
    };
};

export const login = async (username, password, setIsLoggedIn) => {
    try {
        const res = await fetch(`${process.env.REACT_APP_REST_API}login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                password: password
            }),
        });
        const data = await res.json();
        console.log(data);
        setIsLoggedIn(true);
        console.log(data.returnUser.username)

    } catch (error) {
        console.log(error)
    }
};

export const deleteUser = async (username, password, setDeleteUser) => {
    try {
        const res = await fetch(`${process.env.REACT_APP_REST_API}user/:username`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                password: password
            }),
        });
        const data = await res.json();
        console.log(data);
        setDeleteUser(data.user.username);

    } catch (error) {
        console.log(error)
    }
};

export const updateUser = async (username, email, password, setUpdateUser) => {
    try {
        const res = await fetch(`${process.env.REACT_APP_REST_API}user/:account`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            }),
        });
        const data = await res.json();
        console.log(data);
        setUpdateUser(data.user.email)

    } catch (error) {
        console.log(error)
    }
};
