//sorry j'ai du commentaire poubelle car code inspiré et fails que j'aime garder sous la main
//{ useState, useEffect, useRef }
import React from "react";
import Login from "../components/login";
import Register from "../components/register";
function RootComponent() {
    return (
        <div className={"App"}>
            <div>
                <h1>{"Register"}</h1>
                <Register />
            </div>
            <div>
                <h1>{"Login"}</h1>
                <Login />
            </div>
        </div>
    );
}

export default RootComponent;
