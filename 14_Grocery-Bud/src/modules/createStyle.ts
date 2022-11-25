
// ============================== Using of
/*
createStyle({
    selectorName: 'body',
    propertyObj: {
        'display': 'flex',
        'background-color': 'red',
        'align-items': 'center',
        'justify-content': 'center'
    },
});
*/ 

// ==================================================== Functions

// Returns array of obj keys
const objKeys = <Obj>(obj: Obj): (keyof Obj)[] => {
    return Object.keys(obj) as (keyof Obj)[];
};

// Creating style for elements in html doc
export function createStyle(
    prop: {
        selectorName: string,
        propertyObj: {},
        addSelectorTo?: string,
    }
): void {
    // creating style elem
    const style: HTMLStyleElement = document.createElement('style') as HTMLStyleElement;

    // adding him attribute type
    style.type = 'text/css';

    // reset style
    style.innerHTML = ``;

    // getting all obj property and adding them like selectors
    objKeys(prop.propertyObj).forEach((key) => {
        style.innerHTML += `${prop.selectorName} { ${key}: ${prop.propertyObj[key]}; }`;
    });

    // adding style elem to head elem in html doc
    document.getElementsByTagName('head')[0].appendChild(style);

    // witch elem need get selector?
    if (prop.addSelectorTo) {
        (document.querySelector(prop.addSelectorTo)! as HTMLElement).className = prop.selectorName;
    };
};

