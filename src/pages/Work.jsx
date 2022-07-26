import React from "react";
import Footer from "../components/Footer";
import WorkContent from "../components/WorkContent";
import Header from "../components/Header";

function Work() {
    return (
        <div className="work-page">
            <Header isTitle={false} link={"Red square"} path={"/"} />
            <WorkContent />
            <Footer />
        </div>
    );
}

export default Work;
