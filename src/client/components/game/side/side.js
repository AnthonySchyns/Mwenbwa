import React, {useState} from "react";
import Leaderboard from "./leaderboard";
import Gamelog from "./gamelog";
import Historic from "./historic";

// import Leaflet from "./map";
// import Menu from "./menu";
// import Side from ".side";
function Side() {
    const [side, setSide] = useState("");
    // switch (side) {
    //     case "gamelog":
    //         return <Gamelog />
    //     case "leaderboard":
    //         return <Leaderboard />
    //     case "historic":
    //         return <Historic />
    // };
    return (
        <div className={"side-container"}>
            <div className={"side-nav"}>
                <input
                    type={"button"}
                    className={"side-btn gamelog"}
                    value={"G"}
                    onClick={() => setSide("gamelog")}
                />
                <input
                    type={"button"}
                    className={"side-btn leaderboard"}
                    value={"L"}
                    onClick={() => setSide("leaderboard")}
                />
                <input
                    type={"button"}
                    className={"side-btn historic"}
                    value={"H"}
                    onClick={() => setSide("historic")}
                />
            </div>
            <div>{side === "gamelog" ? <Gamelog /> : ""}</div>
            <div>{side === "leaderboard" ? <Leaderboard /> : ""}</div>
            <div>{side === "historic" ? <Historic /> : ""}</div>
        </div>
    );
}
export default Side;
