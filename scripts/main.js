const TEXT_INFO_SELECTOR = '[data-image-role="title"]';
const PIC_LINK = '[data-image-role="select"]';
const INFORMATION = '[data-image-role="information"]';
const HIDE = 'hidden-detail';

function Details(infoText) {
    'use strict';
    let detailTitle= document.querySelector(TEXT_INFO_SELECTOR);
    detailTitle.textContent = infoText;
}

function picText(pic){
    'use strict';
    return pic.getAttribute('change-text');
}

function DetailsFromPic(pic) {
    'use strict';
    Details(picText(pic));
}

function clickedPic(pic) {
    'use strict';
    pic.addEventListener('click', function(event){
        event.preventDefault();
        DetailsFromPic(pic);
        showDetails
    });
}

function getPicArray () {
    'use strict';
    let pics = document.querySelectorAll(TEXT_INFO_SELECTOR);
    let picArray= [].slice.call(pics);
    return picArray;
}


function mouseClickHandler() {
    'use strict';
    document.body.addEventListener('keyup', function(event) {
        preventDefault();
    });
}

function initialzeEvent() {
    'use strict';
    let pics = getPicArray();
    pics.forEach(clickedPic);
    mouseClickHandler();
}

initialzeEvent();