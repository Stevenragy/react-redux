// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { fetchUsers } from "./userSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const User = () => {
    const user = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);
    return (
        <div>
            <h2>List of Users</h2>
            {user.loading && <div>Loading...</div>}
            {!user.loading && user.error && <div>Error: {user.error}</div>}
            {!user.loading && user.users.length ? (
                <div className="grid">
                    {user.users.map((user) => (
                        <div className="card grid-item" key={user.id}>
                            <img
                                width={"120px"}
                                src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                                alt="Avatar"
                            />
                            <div className="container">
                                <h4>
                                    <b>{user.name}</b>
                                </h4>
                                <p>{user.email}</p>
                                <p>{user.phone}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div>No users</div>
            )}
        </div>
    );
};

export default User;
