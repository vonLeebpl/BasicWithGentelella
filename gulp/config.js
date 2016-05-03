/**
 * Created by JPa on 2016-04-30.
 */
'use strict';

module.exports = {
    cssDestPath: './web/css',
    fontDestPath: './web/fonts',
    jsDestPath: './web/js',
    imgDestPath: './web/images',
    cssVendorSrcPath: [
        /* './app/Resources/fonts/css/*.min.css',  font-awasome */
        './app/Resources/css/bootstrap.css',
        './app/Resources/css/font-awesome.css',
        /* './app/Resources/css/bootstrap.min.css', */
        './app/Resources/css/animate.css'
        /* './app/Resources/css/custom.css' */
    ],
    cssAppSrcPath: './app/Resources/css/custom.css',

    fontSrcPath: [
        './app/Resources/fonts/fonts/*.*',
        './app/Resources/fonts/*.*'
    ],
    imgSrcPath: [
        './app/Resources/**/*.{png,jpg,gif,ico}'
    ]

};
