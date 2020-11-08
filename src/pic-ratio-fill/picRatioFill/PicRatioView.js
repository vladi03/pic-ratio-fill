import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";

const staticImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAOiSURBVHhe7do7SyNRGMbx/RyCYOv24n4GLSxdCxVRFLyiiZdEk3hL1gtYaGnh5QvYxjLp1aS0kU0hbAolsFgI6ruc4ytGk0myojOch+cHh3lnIkzxJ8PMxG9C0BgYHAODY2BwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBuds4NnZWYlGoxVraWnp09fc3JxkMhk9s1ucDLy/vy+3t7e6549QKKSTW5wMfHR0JMU/Rd3zh7k6uMjNwMevgVtaWiSZTEosFrMrEU98ykolU9L6vdWewzCXahc5HzgcDtvtV9je3tZJZHFxUSe3OB94cnLSbr/C+vq6TgzsK6/A9/f3MjQ0ZG+IstmsHv04Bg6IV+CRkRGdREZHR3Wq7vr6WsbGxmR8fFxKpZIefYuBA+IVuHxOJBI6Vcrn8zI1NaV7Ij09PVL4XdC9VwwcEK/AZ2dnMjw8LJFIRPb29vToWxcXFxIKVz7T9vf3V0Rm4IB89CYrn8vbN2Be3kdm4IDUC/z09KTTK3NZNq8cjcfHR7utpq+vTwqF58gMHJD//Qbncrma39z3TOSbmxs+BwelXmBzN21egExPT8vV1ZXMz8/rJ40zd+GDg4O6x8C+qhW4q6tLp2dNTU12W+2yXU/7j3adGNhXXoE7Ozt1esvreD27u7s6MbCvygPPzMzYba2IDw8P0tHRoXveisWipNNp2dnZsc/RbW1t+gkD+6o88MTEhH1R0Yjun906iQ358k8C8XhcFhYW5PDw0D5Lm1eextbWlt0aDOyj8sDNzc12W89p+tReznt7eyWVSsn5+bl+4o2PSQEpD1zrd9qTkxOJRCOysrIil5eXerRxq6urOjGwr8oDm3jmMmsCvF9ra2uyubkpG782ZHl5uerf1Fsv+IO/jw4ODuTu753u+YOBfWR+6x0YGLB3uuZb9vLvOl+1zHnM+VzkZGBqHAODY2BwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBsfA4BgYmsg/zgu6X0Ra40gAAAAASUVORK5CYII=";

export const PicRatioView = ({src, width, height, style,
              willFitWidth, colorRgb, colorRgbOpposite}) => {

    const classes = useStyle({
        containerWidth: width,
        containerHeight: height
    });
    const [imageSrc, setImageSrc] = useState(false);
    const [calcWillFitWidth, setCalcWillFitWidth] = useState(false);

    if(imageSrc && src !== imageSrc) {
        setImageSrc(src);
        setCalcWillFitWidth(willFitWidth);
    }
    const colorRgbValue = colorRgb && colorRgb.length > 2
        && imageSrc !== false ?
        `rgb(${colorRgb[0]},${colorRgb[1]}, ${colorRgb[2]})`:
        "rgb(0,0,0)";

    const colorRgbOppositeValue = colorRgbOpposite && colorRgbOpposite.length > 2
        && imageSrc !== false ?
        `rgb(${colorRgbOpposite[0]},${colorRgbOpposite[1]}, ${colorRgbOpposite[2]})` :
        "rgb(0,0,0)";

    return (
        <div className={classes.editContainer}>
            <div
                style={style}
                className={calcWillFitWidth ?
                    classes.imageContainerWidthFit :
                    classes.imageContainerHeightFit
                }
            >
                <div
                    className={calcWillFitWidth ?
                        classes.picBorderWidth :
                        classes.picBorderHeight}
                    style={{backgroundColor: colorRgbValue}}
                />

                <div
                    className={calcWillFitWidth ?
                        classes.fitWidth :
                        classes.fitHeight}
                >
                    <img
                        src={imageSrc || staticImage}
                        className={calcWillFitWidth ?
                            classes.fitWidth :
                            classes.fitHeight}
                        onLoad={() => {
                            if (!imageSrc) {
                                const imgTemp = new Image();
                                imgTemp.onload = () => {
                                    setImageSrc(imgTemp.src);
                                    setCalcWillFitWidth(willFitWidth);
                                };
                                imgTemp.src = src;
                            }
                        }}
                    />
                </div>

                <div
                    className={calcWillFitWidth ?
                        classes.picBorderWidth :
                        classes.picBorderHeight}
                    style={{backgroundColor: colorRgbOppositeValue}}

                />
            </div>
        </div>
    )
};

const useStyle = makeStyles({
    picBorderHeight: {
        width: "50%",
        height: props => props.containerHeight,
        zIndex: 1
    },
    picBorderWidth: {
        width: "100%",
        height: "50%",
        zIndex: 1
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