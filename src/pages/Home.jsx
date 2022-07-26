import React from "react";
import AllProjects from "../components/AllProjects";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Header from "../components/Header";

function Home() {
    return (
        <div>
            <Header isTitle={true} link={"Work"} path={"/work"}/>
            <Main />
            <Footer/>
            <AllProjects />
        </div>
    );
}

export default Home;
