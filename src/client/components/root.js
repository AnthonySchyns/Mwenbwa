//sorry j'ai du commentaire poubelle car code inspiré et fails que j'aime garder sous la main
//{ useState, useEffect, useRef }
import React from "react";
import Home from "../components/home";
import Login from "../components/login";
import Register from "../components/register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Map from "../components/world"tr
import Game from "./game/game";
//import Leaflet from "./map";

function RootComponent() {
    return (
        <Router>
            <div className={"App"}>
                <Switch>
                    <Route path={"/"} exact component={Home} />
                    <Route path={"/register"} component={Register} />
                    <Route path={"/login"} component={Login} />
                    <Route path={"/game"} component={Game} />
                </Switch>
                {/* <div>
                <h1>{"Register"}</h1>
                <Register />
            </div>
            <div>
                <h1>{"Login"}</h1>
                <Login />
            </div> */}
            </div>
        </Router>
    );
}
export default RootComponent;
