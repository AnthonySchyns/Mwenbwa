/* eslint-disable */

import React, { useState, useEffect } from "react";
import axios from "axios";

const Register = () => {
    // initialiser les states afin de pouvoir les gerer
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [helperText, setHelperText] = useState("");
    const [error, setError] = useState("false");

    //regarder si les champs sont vide afin d'activer le button
    useEffect(() => {
        if (
            name.trim() &&
            password.trim() &&
            password2.trim() &&
            email.trim()
        ) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [name, password, password2, email]);

    //lui dire quoi faire une fois le button appuyé
    const handleRegister = () => {
        const payload = {
            email,
            name,
            password,
            password2,
        };
        //requete axios afin d'envoyer un post a l'api via la route predefinie
        axios({
            url: "/api/users/register",
            method: "POST",
            data: payload,
        })
            .then(response => {
                console.log("data added");
            })
            .catch(err => {
                console.log(err.response.data);
                console.log(payload);

                setError(true);
                setHelperText(err.response.data);
            });
    };
    // test axios #succes1
    // axios.post('http://localhost/api/users/register', {
    //     email: email,
    //     name: name,
    //     password: password,
    //     password2: password2,
    // })
    //     .then(function (response) {
    //         console.log(response);
    //     })
    //     .catch(function (error) {
    //         console.log(error.response);
    //     });

    // test axios #fail1
    // axios
    //     .post(
    //         "http://localhost/api/users/register",
    //         {
    //             email,
    //             name,
    //             password,
    //             password2,
    //         },
    //         {
    //             headers: {
    //                 "Content-Type":

    //                     "application/json",
    //             },
    //         },
    //     )
    //     .then(response => {
    //         console.log(response);
    //     })
    //     .catch(error => {
    //         console.log(error.response);
    //     });

    // const handleKeyPress = (e: any) => {
    //     if (e.keyCode === 13 || e.which === 13) {
    //         isButtonDisabled || handleRegister();
    //     }
    // };

    //retourner le rendu
    return (
        <React.Fragment>
            <form className={"class-form"} noValidate autoComplete={"off"}>
                <div className={"class-div"}>
                    {/* <div className={classes.header} title="Login App" /> */}
                    {/* <CardContent> */}
                    {error ? <div>{helperText} </div> : " "}
                    <div>
                        <input
                            //error={error}
                            id={"email"}
                            type={"email"}
                            label={"Email"}
                            placeholder={"Email"}
                            //set la value a chaque changement de l'input
                            onChange={e => setEmail(e.target.value)}
                        // onKeyPress={e => handleKeyPress(e)}
                        />
                        <input
                            //error={error}
                            id={"name"}
                            type={"name"}
                            label={"name"}
                            placeholder={"name"}
                            onChange={e => setName(e.target.value)}
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
                        <input
                            //error={error}
                            id={"password2"}
                            type={"password"}
                            label={"Password2"}
                            placeholder={"Password2"}
                            onChange={e => setPassword2(e.target.value)}
                        // onKeyPress={e => handleKeyPress(e)}
                        />
                    </div>

                    <input
                        type={"button"}
                        className={"class-btn"}
                        onClick={() => handleRegister()}
                        disabled={isButtonDisabled}
                    />
                </div>
            </form>
        </React.Fragment>
    );
};

export default Register;
