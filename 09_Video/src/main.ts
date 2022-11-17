import './style.scss';
import './video.mp4';

import { createElem, createMultElem, getElem } from './modules/createElem';

// createElem()
// createMultElem()
// getElem()

const btn: HTMLElement = getElem('button');

btn.addEventListener('click', (ev) => {
    const switchElem: HTMLElement = getElem('.switch');
    const videElem = getElem('.video-container') as HTMLVideoElement;

    switchElem.classList.toggle('active');
    if (switchElem.classList.contains('active')) {
        videElem.pause();
    } else {
        videElem.play()
    };
});
