import React from "react";
function Historic() {

    return (
        <div className={"sidecontent-container"}>
            <h3>{"Historic"}</h3>
            <div className={'historic-container'}>
                <div className={'free-container'}>
                    <h6>{"Free trees"}</h6>
                    <div>
                        <p>{"tree name"}</p>
                        <hr />
                    </div>
                </div>
                <div className={'free-container'}>
                    <h6>{"owned trees"}</h6>
                    <hr />
                    <div>
                        <p>{"tree name"}</p>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Historic;