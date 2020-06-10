import React from "react";
import {Map, TileLayer, Marker, Popup} from "react-leaflet";
import axios from "axios";

export default class SimpleExample extends React.Component {
    constructor() {
        super();
        this.state = {
            markers: [[50.632659, 5.579952]],
        };
    }

    addMarker = () => {
        const {markers} = this.state;
        axios
            .get("http://localhost/api/tree/get")
            .then((response) => {
                response.data.forEach((element) => {
                    markers.push(element);
                    console.log(element);
                });
                console.log({markers});
                this.setState({markers});
            })
            .catch((err) => {
                console.log(err);
            });
    };

    render() {
        return (
            <Map
                center={[50.632659, 5.579952]}
                whenReady={this.addMarker}
                zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                />
                {this.state.markers.map((position, idx) => (
                    <Marker
                        key={`marker-${idx}`}
                        position={position}
                        onClick={() => {
                            console.log(position.lat);
                        }}>
                        <Popup>
                            <h1>{"Tree"}</h1>
                        </Popup>
                    </Marker>
                ))}
            </Map>
        );
    }
}
