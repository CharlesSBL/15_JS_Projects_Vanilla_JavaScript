// ============================================ Get modules ===========================================


import './video.mp4';
import './style.scss';
import { manageElemInHTML } from './modules/manageElemInHtml';
import { createTag } from './modules/createTag';

import Person from './modules/person';
import { resolve } from '../webpack.config';
// import '../view/index.hbs';

// ============================================ Get elem ===========================================

const body: HTMLElement = document.body;

// ============================================ FUNCTIONS ===========================================

// ======================================== Action ======================================== 

function createElem(
    destination: HTMLElement, 
    type: string, 
    className?: string, 
    idName?: string,
    fn?: string,
    handle?: Function,
    ){
    const newElem: HTMLElement = document.createElement(type) as HTMLElement;

    if(className){
        newElem.classList.add(className);
    };

    if(idName){
        newElem.id = idName;
    };

    if(fn && handle){
    };
};