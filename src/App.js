import "./styles/App.css";
import { useRef } from "react";
import modalContext from "./context/modalContext";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Work from "./pages/Work";

function App() {
    const modal = useRef(null);

    return (
        <div className="App">
            <div className="modal-close" ref={modal}></div>
            <BrowserRouter>
                <modalContext.Provider value={modal}>
                    
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Work" element={<Work />} />
                        <Route path="*" element={<Home />} />
                    </Routes>
                </modalContext.Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
