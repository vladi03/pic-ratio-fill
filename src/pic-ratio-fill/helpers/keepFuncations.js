//These are some left over functions to use later
//import FastAverageColor from "fast-average-color";

// noinspection JSUnusedGlobalSymbols
const calcImageGradient = (colorRgList, willFitWidth)=> {
    const colorGrad = willFitWidth ? ["to right"] : [];
    for (let i = 0; i < colorRgList.length ; i = i + 3) {
        const grad = `rgb(${colorRgList[i]},${colorRgList[i+1]}, ${colorRgList[i+2]})`;
        colorGrad.push(grad);
    }
    return colorGrad;
};

// noinspection JSUnusedGlobalSymbols
const getAvgColor = (imageTarget, willFitWidth, doOpposite = false) => {
    // noinspection JSUnusedLocalSymbols
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
        if(doOpposite) {
            console.log("img wxh",img.naturalWidth, img.naturalHeight);
            console.log("img left(X), top(Y) =>",left, top);
            console.log("cnv wxh", canvasTwo.width, canvasTwo.height);
            console.log(newImg);
        }

        const fac = new FastAverageColor();
        const objImg = document.createElement('img');
        objImg.src = newImg;
        if(objImg.complete) {
            const color = fac.getColor(objImg);
            resolve([color.value[0], color.value[1], color.value[2]]);
        } else {
            objImg.addEventListener("load", ()=> {
                const color = fac.getColor(objImg);
                resolve([color.value[0], color.value[1], color.value[2]]);
            })
        }
    });
};

// noinspection JSUnusedGlobalSymbols
const getColor = (imageTarget, willFitWidth) => {
    const img = imageTarget;
    img.crossOrigin = "Anonymous";
    const canvas = document.createElement('canvas');


    canvas.width = img.width;
    canvas.height = img.height;
    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
    //this gets the upper left hand corner pixel
    const pixelData = canvas.getContext('2d').getImageData(1, 1, 1, 1).data;
    const resultArray = [pixelData[0], pixelData[1], pixelData[2]];
    const incrementPixTall = (img.height-1)/20;
    const incrementPixWidth = (img.width-1)/20;
    for (let i = 1; i < 21; i++) {
        const yValue = (incrementPixTall * i);
        const xValue = (incrementPixWidth * i);

        const pixelDataLower = willFitWidth ?
            canvas.getContext('2d').getImageData(xValue, 1, 1, 1).data :
            canvas.getContext('2d').getImageData(1, yValue, 1, 1).data;

        resultArray.push(pixelDataLower[0]);
        resultArray.push(pixelDataLower[1]);
        resultArray.push(pixelDataLower[2]);
    }

    //RGB Color in an array [R, G, B]
    return resultArray;
};

// noinspection JSUnusedGlobalSymbols
const getColorOther = (imageTarget, willFitWidth) => {
    const img = imageTarget;
    img.crossOrigin = "Anonymous";
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
    //this gets the upper left hand corner pixel
    const pixelData = canvas.getContext('2d').getImageData(1, 1, 1, 1).data;
    const resultArray = [pixelData[0], pixelData[1], pixelData[2]];
    const incrementPixTall = (img.height-1)/20;
    const incrementPixWidth = (img.width-1)/20;
    for (let i = 1; i < 21; i++) {
        const yValue = (incrementPixTall * i);
        const xValue = (incrementPixWidth * i);

        const pixelDataLower = willFitWidth ?
            canvas.getContext('2d').getImageData(xValue, (img.height-1), 1, 1).data :
            canvas.getContext('2d').getImageData((img.width-1), yValue, 1, 1).data;

        resultArray.push(pixelDataLower[0]);
        resultArray.push(pixelDataLower[1]);
        resultArray.push(pixelDataLower[2]);
    }

    //RGB Color in an array [R, G, B]
    return resultArray;
};