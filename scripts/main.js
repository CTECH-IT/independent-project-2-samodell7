const TEXT_INFO_SELECTOR = '[data-image-role="target"]';
const PIC_SELECT = '[data-image-role="location"]';
const PIC_LINK = '[data-image-role="select"]';
const FRAME_SELECT = '[data-image-role="frame"]'
const PIC_INFO = '[data-image-role="target"]';
const INFORMATION = '[data-image-role="information"]';
const HIDDEN = 'hidden-detail';
const CLICKED = 'clicked';

function setDetails(infoText) {

    let detailTitle= document.querySelector(TEXT_INFO_SELECTOR);
    detailTitle.textContent = infoText;
}

function picText(pic){
    'use strict';
    return pic.getAttribute('change-text');
}

function DetailsFromPic(pic) {
    'use strict';
    setDetails(picText(pic));
}

function clickedPic(picx) {
    'use strict';
    picx.addEventListener('click', function(event){
        event.preventDefault();
        DetailsFromPic(picx);
    
    });
}

function mouseClickHandler() {
    'use strict';
    document.body.addEventListener('keyup', function(event) {
        event.preventDefault();
    });
}

function getPicArray () {
    'use strict';
    let pics = document.querySelectorAll(PIC_LINK);
    let picArray= [].slice.call(pics);
    return picArray;
}

function hide() {
    'use strict'
    document.body.classList.add(HIDDEN);
}


function initialzeEvent() {
    'use strict';
    let pics = getPicArray();
    pics.forEach(clickedPic);
    mouseClickHandler();
}

initialzeEvent();