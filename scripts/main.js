const DETAIL_IMAGE_SELECTOR =  '[data-image-role="target"]';
const DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';

function setDetails(imageUrl, titleText) {
    'use strict';
    let detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);

    let detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;
}
