import React from "react";
import "../styles/WorkContent.css";

function WorkContent() {
    const sliders = [
        {
            src: "https://images.wallpaperscraft.ru/image/single/fotoapparat_obektiv_staryj_322317_1920x1080.jpg",
            alt: "CAMERA",
        },
        {
            src: "https://images.wallpaperscraft.ru/image/single/gora_pole_avtomobil_322318_1920x1080.jpg",
            alt: "MOUNTAIN",
        },
        {
            src: "https://images.wallpaperscraft.ru/image/single/bashni_zdaniia_arhitektura_322300_1920x1080.jpg",
            alt: "TOWER",
        },
        {
            src: "https://images.wallpaperscraft.ru/image/single/noutbuk_stol_teni_322279_1920x1080.jpg",
            alt: "NOTEBOOK",
        }, 
        {
            src: "https://images.wallpaperscraft.ru/image/single/most_zdaniia_tuman_322275_1920x1080.jpg",
            alt: "BRIDGE",
        },
        {
            src: "https://images.wallpaperscraft.ru/image/single/liudi_kuby_ramka_322281_1920x1080.jpg",
            alt: "PEOPLE",
        },
    ];

    return (
        <div className="work-content">
            <div className="works">
                {sliders.map((slider) => (
                    <div key={slider.alt} className="work">
                        <img className="work-img" src={slider.src} alt={slider.alt} />
                        <h2 className="work-text">{slider.alt}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WorkContent;
