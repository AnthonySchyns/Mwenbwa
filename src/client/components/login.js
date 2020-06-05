import React, {useState, useEffect} from "react";

const Login = () => {
    // initialiser les states afin de pouvoir les gerer
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [helperText, setHelperText] = useState("");
    const [error, setError] = useState("false");

    //regarder si les champs sont vide afin d'activer le button
    useEffect(() => {
        if (username.trim() && password.trim()) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [username, password]);

    //lui dire quoi faire une fois le button appuyé
    //a update juste phase de test
    const handleLogin = () => {
        if (username === "abc@email.com" && password === "password") {
            setError("false");
            setHelperText("Login Successfully");
        } else {
            setError("true");
            setHelperText("Incorrect username or password");
        }
    };

    // const handleKeyPress = (e: any) => {
    //     if (e.keyCode === 13 || e.which === 13) {
    //         isButtonDisabled || handleLogin();
    //     }
    // };

    return (
        <React.Fragment>
            <form className={"class-form"} noValidate autoComplete={"off"}>
                <div className={"class-div"}>
                    {/* <div className={classes.header} title="Login App" /> */}
                    {/* <CardContent> */}
                    <div>
                        <input
                            error={error}
                            id={"username"}
                            type={"email"}
                            label={"Username"}
                            placeholder={"Username"}
                            onChange={e => setUsername(e.target.value)}
                            // onKeyPress={e => handleKeyPress(e)}
                        />
                        <input
                            error={error}
                            id={"password"}
                            type={"password"}
                            label={"Password"}
                            placeholder={"Password"}
                            onChange={e => setPassword(e.target.value)}
                            // onKeyPress={e => handleKeyPress(e)}
                        />
                    </div>

                    <input
                        type={"button"}
                        className={"class-btn"}
                        onClick={() => handleLogin()}
                        disabled={isButtonDisabled}
                    />
                    {helperText}
                </div>
            </form>
        </React.Fragment>
    );
};

export default Login;
