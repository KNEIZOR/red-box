import React from "react";
import "../styles/Main.css";
import Block from "./Block";
import Clients from "./Clients";
import Sliders from "./Sliders";

function Main() {
    return (
        <main>
            <div className="content">
                <Sliders />
                <Block />
                <Clients />
            </div>
        </main>
    );
}

export default Main;
