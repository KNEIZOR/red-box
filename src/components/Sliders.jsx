import React, { useEffect, useRef } from "react";
import slider from "../hooks/slider";
import {Link} from 'react-router-dom'
import windowUp from "../hooks/windowUp";

function Sliders() {
    const sliders = useRef(null);

    const works = [
        {
            src: "https://images.wallpaperscraft.ru/image/single/fotoapparat_obektiv_staryj_322317_1920x1080.jpg",
            alt: "fotoapparat",
        },
        {
            src: "https://images.wallpaperscraft.ru/image/single/gora_pole_avtomobil_322318_1920x1080.jpg",
            alt: "gora",
        },
        {
            src: "https://images.wallpaperscraft.ru/image/single/bashni_zdaniia_arhitektura_322300_1920x1080.jpg",
            alt: "home",
        },
        {
            src: "https://images.wallpaperscraft.ru/image/single/fotoapparat_obektiv_staryj_322317_1920x1080.jpg",
            alt: "fotoapparat",
        },
        {
            src: "https://images.wallpaperscraft.ru/image/single/noutbuk_stol_teni_322279_1920x1080.jpg",
            alt: "noutbook",
        },
        {
            src: "https://images.wallpaperscraft.ru/image/single/most_zdaniia_tuman_322275_1920x1080.jpg",
            alt: "most",
        },
        {
            src: "https://images.wallpaperscraft.ru/image/single/liudi_kuby_ramka_322281_1920x1080.jpg",
            alt: "lydi",
        },
    ];

    
    useEffect(() => {
            slider(sliders, 500);
    }, []);

    return (
        <div className="sliders" ref={sliders} >
            {works.map((work, index) => (
                <div key={index} className="work">
                    <Link to="/work" onClick={() => windowUp()}><img src={work.src} alt={work.alt} /></Link>
                </div>
            ))}
        </div>
    );
}

export default Sliders;
