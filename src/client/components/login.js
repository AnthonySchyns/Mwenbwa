import React, { useState, useEffect } from "react";

import axios from "axios";
const jwt = require("jsonwebtoken");
const Login = () => {
    //const token = req.header("auth-token");
    // initialiser les states afin de pouvoir les gerer
    const [email, setEmail] = useState("");

    //s const [islogged, setIslogged] = useState("");
    const [password, setPassword] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    //const [helperText, setHelperText] = useState("");
    //const [error, setError] = useState("false");
    // useEffect(
    //     () => {
    //         if (!token) {
    //             setIslogged(true);
    //         }
    //     },
    //ccregarder si les champs sont vide afin d'activer le button
    useEffect(() => {
        if (email.trim() && password.trim()) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [email, password]);

    //lui dire quoi faire une fois le button appuyé
    //a update juste phase de test
    const handleLogin = () => {
        // if (email === "abc@email.com" && password === "password") {
        //     setError("false");
        //     setHelperText("Login Successfully");
        // } else {
        //     setError("true");
        //     setHelperText("Incorrect email or password");
        // }
        const payload = {
            email,
            password,
        };
        axios({
            url: "/api/users/login",
            method: "POST",
            data: payload,
        })
            .then(() => {
                console.log("succes");
            })
            .catch(err => {
                console.log(err);
                console.log(payload);
            });
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
                            //error={error}
                            id={"email"}
                            type={"email"}
                            label={"email"}
                            placeholder={"email"}
                            onChange={e => setEmail(e.target.value)}
                        // onKeyPress={e => handleKeyPress(e)}
                        />
                        <input
                            //error={error}
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
                </div>
            </form>
        </React.Fragment>
    );
};

export default Login;
