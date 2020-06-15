import * as React from "react";
import {Link} from "react-router-dom";

const Rules = () => (
    <div className={"container"}>
        <h1>{"Welcome $pseudo"}</h1>

        <h4>{"Goal"}</h4>
        <p> {"The goal is to become the biggest tree owner in Liege."} </p>

        <h4>{"Rules"}</h4>
        <ul>
            <li>
                {" "}
                {
                    "When you join the adventure, you will receive three free trees and an amount of leaves (the Mwenbwa money). These leaves will be used to buy more trees."
                }{" "}
            </li>
            <li>
                {" "}
                {
                    "Every 15 minutes you will receive the number of leaves equal to the value of the trees you own. But beware, every hour you will lose half of your leaves!"
                }{" "}
            </li>
            <li>
                {" "}
                {
                    "A owned tree can be bought back by another player. If you want to lock your tree, you will have to pay more"
                }{" "}
            </li>
        </ul>

        <h5> {"good luck!"} </h5>

        <div className={"buttons"}>
            <Link className={"login-register"} to={"/map"}>
                {"Join the mwenbwa adventure"}
            </Link>
        </div>
    </div>
);

export default Rules;
