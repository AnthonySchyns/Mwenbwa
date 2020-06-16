import * as React from "react";
import { Link } from "react-router-dom";

const Home = () => (
    <div className={"container"}>
        <h1>{"Mwenba !"}</h1>
        <div className={"buttons"}>
            <Link className={"right-button"} to={"/register"}>
                {"Register"}
            </Link>
            <Link className={"left-button"} to={"/login"}>
                {"Login"}
            </Link>
            <Link className={"left-button"} to={"/game"}>
                {"map"}
            </Link>
        </div>
    </div>
);

export default Home;
