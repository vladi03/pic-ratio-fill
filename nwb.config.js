module.exports = {
    webpack: {
        publicPath: '',
        copy: [
            // Copy directory contents to output
            {from: './src/pic-ratio-fill/sample.jpg'},
            {from: './src/pic-ratio-fill/sample2.jpg'}
        ]
    }
};