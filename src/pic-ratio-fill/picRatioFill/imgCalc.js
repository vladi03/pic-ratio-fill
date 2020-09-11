import ColorThief from "colorthief";

export const calcImage = async (img, containerWidth, containerHeight) => {
    const imageWidth = img.naturalWidth;
    const imageHeight = img.naturalHeight;
    const willFitWidth = calcWillFitWidth(containerWidth, containerHeight,
        imageWidth, imageHeight);

    const colorRgb = await getMaxColor(img, willFitWidth);
    const colorRgbOpposite = await getMaxColor(img, willFitWidth, true);

    return {willFitWidth, colorRgb, colorRgbOpposite};
};

export const calcWillFitWidth = (containerWidth, containerHeight, imageWidth, imageHeight) => {
    return (containerWidth / imageWidth) <= (containerHeight / imageHeight);
};

export const getMaxColor = (imageTarget, willFitWidth, doOpposite = false) => {
    return new Promise((resolve, reject) => {
        const sliverSize = 15;
        const img = imageTarget;
        img.crossOrigin = "Anonymous";
        const canvasTwo = document.createElement('canvas');
        canvasTwo.width = willFitWidth ? img.naturalWidth : sliverSize;
        canvasTwo.height = willFitWidth ? sliverSize : img.naturalHeight;

        //fitWidth and is Opposite (bottom)
        let top = img.naturalHeight - sliverSize;
        let left = 0;
        //fit Height and is Opposite
        if(!willFitWidth && doOpposite) {
            top = 0;
            left = img.naturalWidth - sliverSize;
        } //fit width and not opposite
        else if(!doOpposite) {
            top = 0;
            left = 0
        }

        canvasTwo.getContext('2d').drawImage(
            img, left, top, canvasTwo.width, canvasTwo.height,
            0, 0, canvasTwo.width, canvasTwo.height);

        const newImg = canvasTwo.toDataURL();

        //const fac = new FastAverageColor();
        const objImg = document.createElement('img');
        objImg.src = newImg;
        const colorThief = new ColorThief();

        const calcColors = () => {
            const color = colorThief.getColor(objImg);
            resolve(color);
        };

        if(objImg.complete) {
            calcColors();
        } else {
            objImg.addEventListener("load", ()=> {
                calcColors();
            })
        }
    });
};
