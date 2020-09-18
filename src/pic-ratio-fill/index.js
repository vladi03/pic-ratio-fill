import React from "react";
import {PicRatioFill} from "./picRatioFill/PicRatioFill";
import {PicRatioView} from "./picRatioFill/PicRatioView";

export {PicRatioFill, PicRatioView};

export const PicRatioExample = ()=> {
    const onChange = (results) => console.log(results);
    return (
        <div style={{margin: 30}}>
            <h1>Pic Ratio Fill</h1>
            <p>Example : Fit to width</p>
            <PicRatioFill
                src="sample.jpg"
                width={330}
                height={260}
                style={{marginBottom: 20}}
                onChangeColors={onChange}
            />
            <p>Example : Fit to Height</p>
            <PicRatioFill
                src="sample2.jpg"
                width={330}
                height={260}
                onChangeColors={onChange}
            />
            <p>Example : View Only</p>
            <PicRatioView
                src="sample.jpg"
                width={330}
                height={260}
                colorRgb={[216, 211, 195]}
                colorRgbOpposite={[128, 120, 98]}
	            willFitWidth={true}
            />
            <p>Example : View Only</p>
            <PicRatioView
                src="sample2.jpg"
                width={330}
                height={260}
                colorRgb={[216, 211, 195]}
                colorRgbOpposite={[128, 120, 98]}
                willFitWidth={false}
            />
        </div>
    )
};