export function createElem(
    prop: {
        type: string,
        text?: string,
        idName?: string,
        className?: string,
        eventType?: string,
        handler?: (event: Event) => void,
        destination?: HTMLElement,
        arrElem?: HTMLElement[],
    }
): HTMLElement {
    const newElem = document.createElement(prop.type) as HTMLElement;

    if (prop.text) {
        newElem.innerHTML = prop.text;
    };

    if (prop.className) {
        newElem.classList.add(prop.className);
    };

    if (prop.idName) {
        newElem.id = prop.idName;
    };

    if (prop.handler && prop.eventType) {
        newElem.addEventListener(prop.eventType, prop.handler);
    };

    if (prop.arrElem) {
        prop.arrElem.forEach(elem => {
            newElem.appendChild(elem);
        });
    };

    if (prop.destination) {
        prop.destination.appendChild(newElem)
    };

    return newElem;
};

export function createMultElem(
    count: number,
    prop: {
        type: string,
        text?: string,
        idName?: string,
        className?: string,
        eventType?: string,
        handler?: (event: Event) => void,
        destination?: HTMLElement,
        arrElem?: HTMLElement[],
    },
): HTMLElement[] {
    const newArrElem: HTMLElement[] = [];

    for (let i: number = 0; i < count; i++) {
        const newElem = createElem(prop) as HTMLElement;

        newElem.classList.add(`${prop.className}-${i + 1}`);

        newArrElem[i] = newElem;
    };

    return newArrElem;
};

export function getElem(elem: string): HTMLElement {
    return document.querySelector(elem)!;
};