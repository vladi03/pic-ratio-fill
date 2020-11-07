import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {calcImage} from "./imgCalc";
import {ColorPicker} from "./ColorPicker";

export const PicRatioFill = ({src, width, height, style, onChangeColors}) => {

    const classes = useStyle({
        containerWidth: width,
        containerHeight: height
    });
    const [selectedFill, setSelectedFill] = useState(0);

    const [colorCalc, setColorCalc] = useState({
        willFitWidth: true,
        colorRgb: {color:[0,0,0], pallet: [], main: [0,0,0]},
        colorRgbOpposite:{color:[0,0,0], pallet: [], main: [0,0,0]}
    });
    const {willFitWidth, colorRgb, colorRgbOpposite} = colorCalc;

    const colorRgbValue = `rgb(${colorRgb.color[0]},${colorRgb.color[1]}, ${colorRgb.color[2]})`;
    const colorRgbOppositeValue = `rgb(${colorRgbOpposite.color[0]},${colorRgbOpposite.color[1]}, ${colorRgbOpposite.color[2]})`;

    return (
        <div className={classes.editContainer}>
        <div
            style={style}
            className={willFitWidth ?
                classes.imageContainerWidthFit :
                classes.imageContainerHeightFit
                }
        >
            <div
                className={willFitWidth ? classes.picBorderWidth : classes.picBorderHeight}
                style={{backgroundColor: colorRgbValue}}
                onClick={() => setSelectedFill(1)}
            />

            <div
                className={willFitWidth ? classes.fitWidth : classes.fitHeight}
            >
            <img
                src={src}
                className={willFitWidth ? classes.fitWidth : classes.fitHeight}
                onLoad={(event) => {

                    calcImage(event.target, width, height).then(
                        (result) => {
                            console.log(result);
                            setColorCalc(result);
                            if (onChangeColors)
                                onChangeColors({
                                    colorRgb: result.colorRgb.color,
                                    colorRgbOpposite: result.colorRgbOpposite.color,
                                    willFitWidth: result.willFitWidth
                                })
                        }
                    );

                }}
            />
            </div>

            <div
                className={willFitWidth ? classes.picBorderWidth : classes.picBorderHeight}
                style={{backgroundColor: colorRgbOppositeValue}}
                onClick={() => setSelectedFill(2)}
            />
        </div>
            {selectedFill === 1 &&
            <div className={classes.pickerContainer}>
                <ColorPicker
                    activeColor={colorRgb.color}
                    main={colorRgb.main}
                    pallet={colorRgb.pallet}
                    onColorChange={(color) => {
                        const newColor = {...colorRgb, color};
                        const newCalc = {...colorCalc};
                        newCalc.colorRgb = newColor;
                        setColorCalc(newCalc);
                        if(onChangeColors)
                            onChangeColors({
                                colorRgb: newCalc.colorRgb.color,
                                colorRgbOpposite: newCalc.colorRgbOpposite.color,
                                willFitWidth: newCalc.willFitWidth
                            })
                    }}
                    onClose={()=> setSelectedFill(0)}
                />
            </div>
            }
            {selectedFill === 2 &&
            <div className={classes.pickerContainer}>
                <ColorPicker
                    activeColor={colorRgbOpposite.color}
                    main={colorRgbOpposite.main}
                    pallet={colorRgbOpposite.pallet}
                    onColorChange={(color) => {
                        const newColor = {...colorRgbOpposite, color};
                        const newCalc = {...colorCalc};
                        newCalc.colorRgbOpposite = newColor;
                        setColorCalc(newCalc);
                        if(onChangeColors)
                            onChangeColors({
                                colorRgb: newCalc.colorRgb.color,
                                colorRgbOpposite: newCalc.colorRgbOpposite.color,
                                willFitWidth: newCalc.willFitWidth
                            })
                    }}
                    onClose={()=> setSelectedFill(0)}
                />
            </div>
            }
        </div>
    )
};

const useStyle = makeStyles({
    picBorderHeight: {
        width: "50%",
        height: props => props.containerHeight,
        zIndex: 1,
        cursor: "pointer"
    },
    picBorderWidth: {
        width: "100%",
        height: "50%",
        zIndex: 1,
        cursor: "pointer"
    },
    imageContainerHeightFit : {
        width: props => props.containerWidth,
        height: props => props.containerHeight,
        overflow: "hidden",
        backgroundColor: "#afcdee",
        display:"flex"
    },
    imageContainerWidthFit : {
        width: props => props.containerWidth,
        height: props => props.containerHeight,
        overflow: "hidden",
        backgroundColor: "#afcdee"
    },
    fitHeight: {
        height: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        position: "relative",
        zIndex: 2
    },
    fitWidth: {
        width: "inherit",
        position: "absolute",
        transform: "translateY(-50%)",
        zIndex: 2
    },
    editContainer: {
        display: "flex"
    },
    pickerContainer: {
        marginLeft: 30
    }
});