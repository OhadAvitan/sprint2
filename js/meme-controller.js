'use strict'

var gCanvas = document.querySelector('#my-canvas');;
var gCtx = gCanvas.getContext('2d');


function init() {
    onGallery();
    renderGallery()
        // renderMeme()
        // onGenerator();
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

}

function renderMeme() {
    var currMeme = getCurrMeme();
    MyDrawImg(currMeme);
    drawText(currMeme, currMeme.selectedLineIdx)
        // setTimeout(() => { drawText(currMeme, currMeme.selectedLineIdx), 0 })


}

function onSetBgMeme(imgId) {
    setBgMeme(imgId);
    onGenerator();
    renderMeme();
}

function drawText(currMeme) {
    let lineIdx = currMeme.selectedLineIdx
    var currLine = currMeme.lines[lineIdx];
    gCtx.lineWidth = '2'
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = currLine.color
        // gCtx.font = '40px Ariel'
    gCtx.font = currLine.fSize + 'px Impact'
    gCtx.textAlign = currLine.align
        // gCtx.fillText(currLine.txt, 50, 50)
    gCtx.fillText(currLine.txt, currLine.axisX, currLine.axisY)

    // gCtx.strokeText(currLine.txt, currLine.axisX, currLine.axisY)
}

function onChangeText() {
    var elText = document.querySelector('.line-input');
    // console.log(elText.value);
    // var elText2 = document.querySelector('.line-two-input');
    // changeText(elText2.value, 2)
    // var meme = getCurrMeme()
    // setCanvasBg(meme.selectedImgId)
    changeText(elText.value)
    renderMeme()
}


function MyDrawImg(meme) {
    const imgId = meme.selectedImgId
    var img = new Image()
    img.src = `imgs/${imgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        drawText(meme)

    }
}


function drawOnCanvas() {
    const currMeme = getCurrMeme();
    MyDrawImg(currMeme.selectedImgId)
    for (let i = 0; i < currMeme.lines.length; i++) {
        drawText(currMeme, i)
    }
    // if (currMeme.selectedLineIdx === 0) {

    // }
}

function onDrawText() {
    gCtx.fillText('abc', 10, 10)
    gCtx.fillText('abc', 20, 20)
    gCtx.fillText('abc', 30, 30)
    gCtx.fillText('abc', 40, 40)
    gCtx.fillText('abc', 50, 50)
    gCtx.textAlign = 'center'
    gCtx.fillStyle = 'black'
    gCtx.fillText('abc', 60, 60)
}

function renderGallery() {
    var strHtmls = gImgs.map(function(img) {
        return `
        <img id="${img.id}" src="imgs/${img.id}.jpg" onclick="onSetBgMeme(${img.id})">
        `
    })
    document.querySelector('.gallery').innerHTML = strHtmls.join('');
}



function onMoveLine(diff) {
    const currMeme = getCurrMeme();
    currMeme.lines[currMeme.selectedLineIdx].axisY += diff;
    renderMeme()
}

function onChangeFontSize(diff) {
    var currMeme = getCurrMeme();
    currMeme.lines[currMeme.selectedLineIdx].fSize += diff;
    renderMeme()
}

// function drawText(ev) {
//     console.log('asd');
//     var fSize = 80
//     gCtx.lineWidth = '2'
//     gCtx.strokeStyle = 'black'
//     gCtx.fillStyle = 'white'
//         // gCtx.font = '40px Ariel'
//     gCtx.font = fSize + 'px impact'
//     gCtx.textAlign = 'left'
//     gCtx.fillText('text', ev.offsetX, ev.offsetY)
//     gCtx.strokeText('text', ev.offsetX, ev.offsetY)
// }
// function drawText(text, x, y, fSize = 100) {
//     gCtx.lineWidth = '2'
//     gCtx.strokeStyle = 'black'
//     gCtx.fillStyle = 'white'
//         // gCtx.font = '40px Ariel'
//     gCtx.font = fSize + 'px impact'
//     gCtx.textAlign = 'left'
//     gCtx.fillText(text, x, y)
//     gCtx.strokeText(text, x, y)
// }

// gCanvas.height - 0.2 * fSize

function setCanvasBg(imgId) {
    console.log(imgId);
    onGenerator();
    var elImg = document.getElementById(imgId);
    console.log(elImg);
    elImg.style.width = '20px';
    elImg.objectFit = 'cover';

    MyDrawImg(imgId);
    // gCtx.drawImage(elImg, 0, 0);
    // gCtx.fillStyle = url('imgs/1.jpg')
}

function resizeCanvas() {
    // gCanvas.width = window.innerWidth * 0.5
    // gCanvas.height = window.innerWidth * 0.5
    gCanvas.width = 396
    gCanvas.height = 396
}

function getText() {

}

function onChangeLine() {
    changeLine();
}


function onGallery() {
    var elGallery = document.querySelector('.gallery');
    elGallery.style.display = 'block'
    var elGenerator = document.querySelector('.generator');
    elGenerator.style.display = 'none'
}

function onGenerator() {
    var elGallery = document.querySelector('.gallery');
    elGallery.style.display = 'none'
    var elGenerator = document.querySelector('.generator');
    elGenerator.style.display = 'block'
}

function onAbout() {
    console.log('Hi there..my name is ohad and for build this generator i use: HTML , CSS and JavaScript.');
}