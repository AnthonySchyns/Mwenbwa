import React from "react";
import Clock from "react-live-clock";

function Menu(props) {
    // const useremail = userdata;

    return (
        <div className={"menu-container"}>
            <div className={"menu-element"}>
                <div className={"menu-element-item"}>
                    {<p>{props.userdata}</p>}
                </div>
                <div className={"menu-element-item"}>
                    {<p>{props.userdata}</p>}
                </div>
            </div>
            <Clock
                className={"clock"}
                format={"HH:mm"}
                interval={1000}
                ticking={true}
            />
            <div className={"menu-element"}>{<p>{props.userdata}</p>}</div>
        </div>
    );
}

export default Menu;
