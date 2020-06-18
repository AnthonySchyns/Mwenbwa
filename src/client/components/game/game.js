import React, {useState, useEffect} from "react";
import Leaflet from "../map";
import Menu from "./menu";
import Side from "./side/side";
import axios from "axios";
// import express from "express";

function Game() {
    const [userdata, setUserdata] = useState("");
    useEffect(() => {
        axios
            .get("/api/users/user")
            .then(response => {
                const email = response.data.email;
                console.log(email);
                setUserdata(email);
            })
            .catch(err => {
                console.log(err);
            });
    }, [setUserdata]);

    // const user = () => {
    //     const payload = {
    //         email,
    //     };
    //     axios({
    //         url: "/api/users/user",
    //         method: "GET",
    //         data: payload,
    //     })
    //         .then((response) => {
    //             setUserdata(response.data.email);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             console.log(payload);
    //         });
    // };

    // const [userdata, setUserdata] = useState("");
    // const getUser = () => {
    //     axios
    //         .get("/api/users/user")
    //         .then(response => {
    //             const data = response.data;
    //             setUserdata(data);
    //             console.log(userdata);
    //         })
    //         .catch(() => {
    //             console.log("fail");
    //         });
    // };
    // const userd = getUser(userdata);
    return (
        <div>
            <Menu userdata={userdata} />
            <div className={"flex-container"}>
                <Leaflet />
                <Side />
            </div>
        </div>
    );
}
export default Game;
