import React from "react";
import {Link} from 'react-router-dom'
import windowUp from "../hooks/windowUp";

function AllProjects() {
    return (
        <Link to="/work" onClick={() => windowUp()}>
            <div className="img-footer__wrapper">
            <img
                className="footer-img"
                src="https://images.wallpaperscraft.ru/image/single/noutbuk_stol_teni_322279_1920x1080.jpg"
                alt=""
            />
            <div className="footer-img-content">
                <h2>All projects</h2>
                <h2>Work</h2>
            </div>
        </div>
        </Link>
    );
}

export default AllProjects