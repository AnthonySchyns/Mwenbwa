import React, { useState } from "react";
import { Map, TileLayer } from "react-leaflet";
import MarkerCluster from "./MarkerCluster";
import axios from "axios";

//const addMarker = () => {
//  const {markers} = this.state;
//axios
//  .get("http://localhost/api/tree/get")
//.then((response) => {
//  response.data.forEach((element) => {
//    markers.push(element);
//  console.log(element);
//});
// console.log({markers});
//this.setState({markers});
//})
//.catch((err) => {
//  console.log(err);
//});
//};
let please = [];
const Leaflet = () => {
    const [markers, setMarkers] = useState([]);
    axios
        .get("http://localhost/api/tree/get")
        .then((response) => {
            response.data.forEach((element) => {
                please.push({ position: element });
                console.log(element);
            });
            setMarkers(please);
        })
        .catch((err) => {
            console.log(err);
        });
    return (
        // <div className={"map-container"}>
        <Map center={[50.632659, 5.579952]} zoom={13}>
            <TileLayer
                attribution={"&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors"}
                url={"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}
            />
            <MarkerCluster markers={markers} />
        </Map>
        //</div>
    );
};
export default Leaflet;
