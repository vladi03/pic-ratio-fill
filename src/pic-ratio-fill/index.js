import React from "react";
import {PicRatioFill} from "./picRatioFill/PicRatioFill";

export const PicRatioExample = ()=> {

    return (
        <div style={{margin: 30}}>
            <h1>Pic Ratio Fill</h1>
            <p>Example : Fit to width</p>
            <PicRatioFill
                src="sample.jpg"
                width={330}
                height={260}
                style={{marginBottom: 20}}
            />
            <p>Example : Fit to Height</p>
            <PicRatioFill
                src="sample2.jpg"
                width={330}
                height={260}
            />

        </div>
    )
};