
export const FormInput = ({ label, id, name, value, onChange, placeHolder }) => {
    return (
        <>
            <label>{label}</label>
            <input
                id={id}
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeHolder}

            />
        </>
    )
}

export const UserNameInput = ({ userName, onChange}) =>  {
    return (
        <>
            <label>User Name</label>
            <input
                id="userName"
                type="text"
                name="userName"
                value={userName}
                onChange={onChange}
                placeholder="User Name"

            />
        </>
    )
}

export const PasswordInput = ({ password, onChange }) =>  {
    return (
        <>
            <label>Password</label>
            <input
                id="password"
                type="text"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="Password"

            />
        </>
    )
}


