import * as React from "react";
import {Link} from "react-router-dom";

const Home = () => (
    <div className={"container"}>
        <h1>{"Mwenbwa !"}</h1>
        <div className={"buttons"}>
            <Link className={"login-register"} to={"/register"}>
                {"Register"}
            </Link>
            <Link className={"login-register"} to={"/login"}>
                {"Login"}
            </Link>
        </div>
    </div>
);

export default Home;
