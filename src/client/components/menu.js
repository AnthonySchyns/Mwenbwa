import React, { useState, useEffect } from "react";
import Clock from "react-live-clock";

const Menu = () => {

    return (
        <div>{<Clock format="HH:mm:ss" interval={1000} ticking={true} />}</div>
    );
};

export default Menu;
