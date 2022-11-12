export const manageElemInHTML = {
    // making new arr of elem and return him
    createElements: function (numberOfElem: number, elemType: string): HTMLElement[] {
        const newElemArr: HTMLElement[] = [];

        for (let i: number = 0; i < numberOfElem; i++) {
            newElemArr[i] = document.createElement(elemType);
        };

        return newElemArr;
    },
    // create same info for each elem in arr 
    createInfoInElem: function (arrOfElem: HTMLElement[], info: string,): void {
        arrOfElem.forEach((elem, index) => {
            elem.innerHTML = info;
        });
    },
    // Adding arr of element to do them child of destinationElem
    addElementTo: function (destinationElem: HTMLElement, arrOfElem: HTMLElement[]): void {
        for (let i: number = 0; i < arrOfElem.length; i++) {
            destinationElem.appendChild(arrOfElem[i]);
        };
    },
    // check if elements inside arr has already this classes
    // and return true if already has classes
    checkClasses: function (arrOfElem: HTMLElement[], className: string): boolean {
        for (let key of arrOfElem) {
            if (key.classList.contains(className)) {
                console.log('elements inside arr already has this classes!!!');

                return true;
            };
        };
        return false;
    },
    // adding class to elements inside arr and second class with index
    addClassesToArrOfElem: function (arrOfElem: HTMLElement[], className: string): void {
        if (this.checkClasses(arrOfElem, className)) {
            return undefined;
        };

        arrOfElem.forEach((elem, index) => {
            elem.classList.add(...[`${className}`, `${className}-${index + 1}`]);
        });
    },
    // add classes to "child elem" inside chose "parent element" 
    addClassesToChildElemOfElemInArr: function (parentElem: HTMLElement, choseElem: string, className: string): void {
        // Getting all type of "child elem"
        const NodeOfElemList: NodeListOf<HTMLElement> = parentElem.querySelectorAll(choseElem);

        // convert arr to "html element" type arr
        const liArray: HTMLElement[] = Array.prototype.slice.call(NodeOfElemList);

        // adding him to add classes to elements
        this.addClassesToArrOfElem(liArray, `${parentElem.classList[1]}_${className}`);
    },

    // add Same classes To All tag type In Parent Arr
    addSameToAllElemClassInParentArr: function (arrOfElem: HTMLElement[], tagType: string, classType: string) {
        for (let i: number = 0; i < arrOfElem.length; i++) {
            this.addClassesToChildElemOfElemInArr(arrOfElem[i], tagType, classType);
        };
    },

    // for each block elem inside making chose all tags inside classes 
    addClassForTagsInsideBlockArr: function (blocArr: HTMLElement[], tagType: string[], tagClass: string[]) {
        for (let i: number = 0; i < tagType.length; i++) {
            this.addSameToAllElemClassInParentArr(blocArr, tagType[i], tagClass[i]);
        };
    },

    // Bind all functions in one comfort interface with options
    createArrOfBlockElem: function (
        options: {
            destinationAdd: HTMLElement,
            amountOfBlocks: number,
            typeOfBlocks: string,
            classOfBlock: string,
            structureInsideBlocks: string,
            arrOfTags: string[],
            arrOfClassForTags: string[],
        }
    ) {
        const blockArr: HTMLElement[] = this.createElements(options.amountOfBlocks, options.typeOfBlocks);

        this.addClassesToArrOfElem(blockArr, options.classOfBlock);

        this.createInfoInElem(blockArr, options.structureInsideBlocks);

        this.addClassForTagsInsideBlockArr(blockArr, options.arrOfTags, options.arrOfClassForTags);

        this.addElementTo(options.destinationAdd, blockArr);
    },
};


// info how using the creator
/* 
// uzyc math random z for dla wsadzenia random slow i blokow w string
manageElemInHTML.createArrOfBlockElem(
    {
        destinationAdd: body,
        amountOfBlocks: 2,
        typeOfBlocks: 'div',
        classOfBlock: 'block',
        structureInsideBlocks: `
            ${createTag.tagBodyCreator('h1', `User is: ${vasa.name}`)}
            ${createTag.tagBodyCreator('p', 'some text')}
            ${createTag.tagBodyCreator('br', '')}
            ${createTag.tagBodyCreator('p', 'google.com')}
            ${createTag.tagBodyCreator('p', 'facebook.com')}
        `,
        arrOfTags: [
            createTag.tagKey('h1'),
            createTag.tagKey('p'),
        ],
        arrOfClassForTags: [
            createTag.tagClass('h1'),
            createTag.tagClass('p'),
        ],
    },
);
*/