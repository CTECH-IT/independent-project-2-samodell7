const TEXT_INFO_SELECTOR = '[data-image-role="title"]';
const PIC_LINK = '[data-image-role="select"]';
const IMFORMATION = '[data-image-role="information"]';

function Details(infoText) {
    'use strict'
    let detailText= document.querySelector(TEXT_INFO_SELECTOR);
    detailTitle.textContent = infoText;
}

function picText(pic){
    'use strict';
    return pic.getAttribute
}