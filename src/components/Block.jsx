import React, { useEffect, useRef } from "react";
import observer from "../hooks/observer";

function Block() {
    const target = useRef(null);

    useEffect(() => {
        observer(target, "0px 0px -30px 0px");
        
    }, []);

    return (
        <div className="block">
            <div className="block__wrapper" ref={target}>
                <div className="block-title">
                    <h2>
                        We deal in ideas, design and media that are category
                        defying. When the world Millis, you’ve got to Vanilli.
                    </h2>
                </div>
                <div className="block-text">
                    <p>
                        Red Square believes in rigorous development of brand
                        strategy and whip-smart execution. We make all sorts of
                        things. Things that move markets, compel audiences and
                        sell product. We help great brands create what comes
                        next.
                    </p>
                </div>
                    <hr/>
            </div>
        </div>
    );
}

export default Block;
