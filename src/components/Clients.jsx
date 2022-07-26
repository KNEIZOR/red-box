import React, { useEffect, useRef } from "react";
import observer from "../hooks/observer";

function Clients() {
    const listOne = useRef(null);
    const listTwo = useRef(null);
    const listTitle = useRef(null);
    const clientHr = useRef(null);

    useEffect(() => {
        observer(listOne);
        observer(listTwo);
        observer(listTitle);
        observer(clientHr);
    }, []);

    return (
        <div className="block-clients">
            <div className="block-clients__wrapper">
                <div className="clients-menu">
                    <div className="client-title" ref={listTitle}>
                        <h2>Select Clients</h2>
                    </div>
                    <div className="clients-list">
                        <div className="list-one" ref={listOne}>
                            <li>Cherokee Casinos</li>
                            <li>Flipboard</li>
                            <li>Foxwoods</li>
                            <li>Glanbia Nutritionals</li>
                            <li>Google</li>
                            <li>Hard Rock</li>
                            <li>Hibbett Sports</li>
                            <li>Hilton Worldwide</li>
                            <li>Jack Daniel’s</li>
                        </div>
                        <div className="list-two" ref={listTwo}>
                            <li>New York Pride</li>
                            <li>Patreon</li>
                            <li>Rivers Casino</li>
                            <li>Snickers</li>
                            <li>Southern Comfort</li>
                            <li>The University of Alabama</li>
                            <li>Twix</li>
                            <li>Wind Creek Hospitality</li>
                        </div>
                    </div>
                </div>
                <div className="hr" ref={clientHr}>
                    <hr  />
                </div>
            </div>
        </div>
    );
}

export default Clients;
