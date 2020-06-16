import React, { useState } from "react";
import Leaflet from "./map";
import Menu from "./menu";
import Side from "./side/side";
function Game() {
    return (
        <div>
            <Menu />
            <div className={"flex-container"}>
                <Leaflet />
                <Side />
            </div>
        </div>
    );
}
export default Game;
