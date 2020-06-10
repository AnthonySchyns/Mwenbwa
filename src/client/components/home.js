import * as React from "react";
import { Link } from "react-router-dom";

const Home = () => (
    <div>
        <h1>{"Welcome to Mwenba!"}</h1>
        <hr />
        <Link to="/register">
            <button>{"Register"}</button>
        </Link>
        <Link to="/login">
            <button to="/login">{"Login"}</button>
        </Link>
    </div>
);

export default Home;
