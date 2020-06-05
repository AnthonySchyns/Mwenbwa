/* becodeorg/mwenbwa
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

//import * as React from "react";
//import ReactDOM from "react-dom";
import React from "react";
import ReactDOM from "react-dom";
//import "app.css";
import RootComponent from "./components/root";

// function App() {
//     return (
//         <div className="app">
//             <Pause />
//         </div>
//     );
// }

// export default App;

ReactDOM.render(
    <div>
        <RootComponent />
    </div>,
    document.querySelector("#app"),
);
