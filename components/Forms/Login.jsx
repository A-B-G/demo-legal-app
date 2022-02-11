import { UserNameInput, PasswordInput } from './FormInputs';

export const Login = ({ userName, password, setUserName, setPassword }) => {
    return (
        <fieldset>
            <UserNameInput
                value={userName} 
                onChange={setUserName}
            /><br />
            <PasswordInput
                value={password} 
                onChange={setPassword}
            />
            <button>Log In</button>
        </fieldset>
    )

}
