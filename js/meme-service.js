'use strict'

var gKeywords = { 'happy': 4, 'funny': 2 }

var gImgs = [{ id: 1, url: 'imgs/1.jpg', keywords: ['happy'] },
    { id: 2, url: 'imgs/2.jpg', keywords: ['love'] },
    { id: 3, url: 'imgs/3.jpg', keywords: ['happy'] },
    { id: 4, url: 'imgs/4.jpg', keywords: ['happy'] },
    { id: 5, url: 'imgs/5.jpg', keywords: ['happy'] },
    { id: 6, url: 'imgs/6.jpg', keywords: ['happy'] },
    { id: 7, url: 'imgs/7.jpg', keywords: ['happy'] },
    { id: 8, url: 'imgs/8.jpg', keywords: ['happy'] },
    { id: 9, url: 'imgs/9.jpg', keywords: ['happy'] },
    { id: 10, url: 'imgs/10.jpg', keywords: ['happy'] },
    { id: 11, url: 'imgs/11.jpg', keywords: ['happy'] },
    { id: 12, url: 'imgs/12.jpg', keywords: ['happy'] },
    { id: 13, url: 'imgs/13.jpg', keywords: ['happy'] },
    { id: 14, url: 'imgs/14.jpg', keywords: ['happy'] },
    { id: 15, url: 'imgs/15.jpg', keywords: ['happy'] },
    { id: 16, url: 'imgs/16.jpg', keywords: ['happy'] },
    { id: 17, url: 'imgs/17.jpg', keywords: ['happy'] },
    { id: 18, url: 'imgs/18.jpg', keywords: ['happy'] }
];

// var gCanvas;

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{
            txt: 'I never eat Falafel',
            fSize: 40,
            align: 'start',
            color: 'black',
            axisX: 0,
            axisY: 100
        },
        {
            txt: 'why its not working',
            fSize: 50,
            align: 'start',
            color: 'blue',
            axisX: 10,
            axisY: 300
        }
    ]
}


function getCurrMeme() {
    return gMeme;
}

function setBgMeme(imgId) {
    gMeme.selectedImgId = imgId;
}

function changeText(txt) {
    console.log('txt before:', txt);
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
    console.log('txt after:(in the model)', gMeme.lines[gMeme.selectedLineIdx].txt);
}

function changeLine() {
    // if (gMeme.selectedLineIdx === gMeme.lines.length - 1) {
    //     gMeme.selectedLineIdx = 0;

    // } else gMeme.selectedLineIdx++
    //     console.log(gMeme.selectedLineIdx);
    // gMeme.selectedLineIdx++
    // if (gMeme.selectedLineIdx === gMeme.lines.length) {
    //     gMeme.selectedLineIdx = 0;
    // }

    (gMeme.selectedLineIdx === gMeme.lines.length - 1) ? gMeme.selectedLineIdx = 0: gMeme.selectedLineIdx++


}