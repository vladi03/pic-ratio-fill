import React from "react";
import {makeStyles} from "@material-ui/core/styles";

export const PicRatioView = ({src, width, height, style,
              willFitWidth, colorRgb, colorRgbOpposite}) => {

    const classes = useStyle({
        containerWidth: width,
        containerHeight: height
    });

    const colorRgbValue = `rgb(${colorRgb[0]},${colorRgb[1]}, ${colorRgb[2]})`;
    const colorRgbOppositeValue = `rgb(${colorRgbOpposite[0]},${colorRgbOpposite[1]}, ${colorRgbOpposite[2]})`;

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
                    className={willFitWidth ?
                        classes.picBorderWidth :
                        classes.picBorderHeight}
                    style={{backgroundColor: colorRgbValue}}
                />

                <div
                    className={willFitWidth ?
                        classes.fitWidth :
                        classes.fitHeight}
                >
                    <img
                        src={src}
                        className={willFitWidth ?
                            classes.fitWidth :
                            classes.fitHeight}

                    />
                </div>

                <div
                    className={willFitWidth ?
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