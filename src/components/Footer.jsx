import React, { useContext, useEffect, useRef } from "react";
import observer from "../hooks/observer";
import "../styles/Footer.css";
import Modal from "../hooks/modal";
import modalContext from "../context/modalContext";
import { Link } from "react-router-dom";
import windowUp from "../hooks/windowUp";

function Footer() {
    const footer = useRef(null);
    const modal = useContext(modalContext);
    const modalFooter = new Modal(modal);

    useEffect(() => {
        observer(footer);
    }, []);

    function traffic(e) {
        let target = e.target;
        if (target.tagName === "SPAN") {
            target = target.parentElement;
        }
        let box = target.getBoundingClientRect();

        let x = Math.floor(
            (e.pageX - (box.right - target.offsetWidth / 2)) / 5
        );
        let y = Math.floor(
            (e.pageY -
                (box.bottom + window.pageYOffset - target.offsetHeight / 2)) /
                3
        );

        if (y > 0) {
            y = y - y - y;
        } else if (y < 0) {
            y = Math.abs(y);
        }

        target.style.transform = `rotateY(${x}deg) rotateX(${y}deg) rotateZ(0deg) scale(1)`;
    }

    function standart(e) {
        let target = e.target;
        if (target.tagName === "SPAN") {
            target = target.parentElement;
        }

        target.style.transform = "none";
    }

    return (
        <footer>
            <div className="footer__wrapper" ref={footer}>
                <div
                    className="email"
                    onMouseEnter={() => modalFooter.openModal(modal)}
                    onMouseLeave={() => modalFooter.closeModal(modal)}
                >
                    <Link
                        to="/"
                        onClick={() => {
                            windowUp();
                            modalFooter.closeModal(modal);
                        }}
                    >
                        <h2
                            onMouseMove={(e) => traffic(e)}
                            onMouseLeave={(e) => standart(e)}
                        >
                            Let’s talk. <br />
                            <span className="red">hi@rsq.com</span>
                        </h2>
                    </Link>
                </div>
                <div className="footer-links">
                    <div className="top">
                        <Link to="/" onClick={() => windowUp()}>
                            Nugs.
                        </Link>
                        <Link to="/" onClick={() => windowUp()}>
                            <i className="fa-brands fa-instagram"></i>
                        </Link>
                        <Link to="/" onClick={() => windowUp()}>
                            <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link to="/" onClick={() => windowUp()}>
                            <i className="fa-brands fa-linkedin"></i>
                        </Link>
                    </div>
                    <div className="bottom">
                        <p>Mobile, AL</p>
                        <p>Chicago, IL</p>
                        <p>Tulsa, OK</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
