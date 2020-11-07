import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {calcImage} from "./imgCalc";
import {ColorPicker} from "./ColorPicker";

const staticImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAOiSURBVHhe7do7SyNRGMbx/RyCYOv24n4GLSxdCxVRFLyiiZdEk3hL1gtYaGnh5QvYxjLp1aS0kU0hbAolsFgI6ruc4ytGk0myojOch+cHh3lnIkzxJ8PMxG9C0BgYHAODY2BwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBuds4NnZWYlGoxVraWnp09fc3JxkMhk9s1ucDLy/vy+3t7e6549QKKSTW5wMfHR0JMU/Rd3zh7k6uMjNwMevgVtaWiSZTEosFrMrEU98ykolU9L6vdWewzCXahc5HzgcDtvtV9je3tZJZHFxUSe3OB94cnLSbr/C+vq6TgzsK6/A9/f3MjQ0ZG+IstmsHv04Bg6IV+CRkRGdREZHR3Wq7vr6WsbGxmR8fFxKpZIefYuBA+IVuHxOJBI6Vcrn8zI1NaV7Ij09PVL4XdC9VwwcEK/AZ2dnMjw8LJFIRPb29vToWxcXFxIKVz7T9vf3V0Rm4IB89CYrn8vbN2Be3kdm4IDUC/z09KTTK3NZNq8cjcfHR7utpq+vTwqF58gMHJD//Qbncrma39z3TOSbmxs+BwelXmBzN21egExPT8vV1ZXMz8/rJ40zd+GDg4O6x8C+qhW4q6tLp2dNTU12W+2yXU/7j3adGNhXXoE7Ozt1esvreD27u7s6MbCvygPPzMzYba2IDw8P0tHRoXveisWipNNp2dnZsc/RbW1t+gkD+6o88MTEhH1R0Yjun906iQ358k8C8XhcFhYW5PDw0D5Lm1eextbWlt0aDOyj8sDNzc12W89p+tReznt7eyWVSsn5+bl+4o2PSQEpD1zrd9qTkxOJRCOysrIil5eXerRxq6urOjGwr8oDm3jmMmsCvF9ra2uyubkpG782ZHl5uerf1Fsv+IO/jw4ODuTu753u+YOBfWR+6x0YGLB3uuZb9vLvOl+1zHnM+VzkZGBqHAODY2BwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBsfA4BgYmsg/zgu6X0Ra40gAAAAASUVORK5CYII=";

export const PicRatioFill = ({src, width, height, style, onChangeColors}) => {

    const classes = useStyle({
        containerWidth: width,
        containerHeight: height
    });
    const [selectedFill, setSelectedFill] = useState(0);
    const [imageSrc, setImageSrc] = useState(false);

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
                src={imageSrc || staticImage}
                className={willFitWidth ? classes.fitWidth : classes.fitHeight}
                onLoad={(event) => {
                    if(imageSrc) {
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
                    } else {
                        setImageSrc(src);
                    }
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