import React, {Fragment} from 'react'
import { SketchPicker } from 'react-color'

export const ColorPicker = ({activeColor, main, pallet, onColorChange, onClose}) => {

    const colors = [rgbToHex(main)];
    pallet.forEach((color) => {
        const hexColor = rgbToHex(color);
        if(colors.indexOf(hexColor)=== -1)
            colors.push(hexColor)
    });

    return (
        <Fragment>
            {onClose &&
            <span style={{float:"right", marginTop: -20, marginRight: 5, cursor: "pointer"}}

               onClick={()=> onClose()}>Close</span>}
        <SketchPicker
            color={{r: activeColor[0], g: activeColor[1], b: activeColor[2]}}
            onChangeComplete={(color) => {
                onColorChange([color.rgb.r, color.rgb.g, color.rgb.b]);
            }}
            presetColors ={colors}
        />
        </Fragment>
    );
};

function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(rgbArray) {
    return `#${componentToHex(rgbArray[0])}${componentToHex(rgbArray[1])}${componentToHex(rgbArray[2])}`;
}