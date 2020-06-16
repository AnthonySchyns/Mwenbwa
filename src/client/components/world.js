import React, {useState} from "react";
import {Map, TileLayer, Marker, Popup} from "react-leaflet";
import axios from "axios";
const MyMap = () => {
    let pos = [[]];
    const [state, setState] = useState([[50.632659, 5.579952]]);
    axios
        .get("http://localhost/api/tree/get")
        .then((response) => {
            console.log(response.data.lat);
        })
        .catch((err) => {
            console.log(err);
        });
    return (
        <Map center={[50.632659, 5.579952]} zoom={12}>
            {" "}
            <TileLayer
                url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
                attribution={
                    '&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
                }
            />{" "}
            <Marker position={[50.632659, 5.579952]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </Map>
    );
};
export default MyMap;
