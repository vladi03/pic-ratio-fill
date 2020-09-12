# pic-ratio-fill
A material-ui component for displaying images in an aspect ratio.
If the image does not fit, the image will be fit ether by height or width
so that the entire image is shown without cropping.
The areas on left/right ot top/bottom will be filled with the most prominent
color from the closest edge.

# Install
```
npm install pic-ratio-fill
```

# Code Use
```
            <PicRatioFill
                src="sample2.jpg"
                width={330}
                height={260}
                onChangeColors={onChange}
            />
```

# Example
The following example shows a table with all the functionality:
[Running Example](https://vladi03.github.io/pic-ratio-fill/ "Pic Ratio Fill")
