import React, { useContext, useEffect, useRef } from "react";
import modalContext from "../context/modalContext";
import appear from "../hooks/appear";
import Modal from "../hooks/modal";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import windowUp from "../hooks/windowUp";

function Header({ isTitle, link, path }) {
    const titleText = useRef(null);
    const modal = useContext(modalContext);
    const modalHeader = new Modal(modal);

    useEffect(() => {
        appear(titleText, 200);
    }, []);

    return (
        <header>
            <div className="header__wrapper">
                <nav>
                    <div className="logo">
                        <Link to="/" id="logo" onClick={() => windowUp()}>
                            <h2 className="logo-title">Red Box</h2>
                        </Link>
                    </div>
                    <div className="links">
                        <Link
                            to={path}
                            className="link"
                            onMouseEnter={() => modalHeader.openModal(modal)}
                            onMouseLeave={() => modalHeader.closeModal(modal)}
                            onClick={() => {
                                modalHeader.closeModal(modal);
                                windowUp();
                            }}
                        >
                            {link} <span>&#8250;</span>
                        </Link>
                    </div>
                </nav>
                {isTitle ? (
                    <div className="title">
                        <h1 ref={titleText}>
                            <span>The </span>
                            <span>agency </span>
                            <span>for </span>
                            <br />
                            <span>what </span>
                            <span>comes </span>
                            <span>next.</span>
                        </h1>
                    </div>
                ) : null}
            </div>
        </header>
    );
}

export default Header;
