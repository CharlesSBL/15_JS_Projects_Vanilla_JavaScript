


// ============================== Data ==============================

// Tag classes with index
const tagClassArr: string[] = [
    'block', 'line', 'text', 'title-h1',
    'title-h2', 'title-h3', 'title-h3', 'container-tag',
    'list-item', 'list', 'btn', 'image', 'link',
    'br'
];

// tag index of classes 
const tagMap = {
    ['div']: 0, ['hr']: 1, ['p']: 2, ['h1']: 3,
    ['h2']: 4, ['h3']: 5, ['h4']: 6, ['container']: 7,
    ['li']: 8, ['ul']: 9, ['button']: 10, ['img']: 11,
    ['a']: 12, ['br']: 13,
};

// creating arr of (tag names)
const tagMapKeys: string[] = Object.keys(tagMap);

// bind to one object tag names and tag index of classes
const tagMapKeysAndTagMap = {
    tagsIndex: tagMap,
    tagKeys: tagMapKeys,
};


// ============================== Object func ==============================
export const createTag = {
    // returns tag element
    tagBodyCreator: function (tag: string, textInside: string): string {
        const tagSaved: string = tagMapKeysAndTagMap.tagKeys[(tagMapKeysAndTagMap.tagsIndex as any)[tag]];
        
        return `<${tagSaved}>${textInside}</${tagSaved}>`;
    },

    // returns tag name
    tagKey: function (tag: string): string {
        const tagSaved: string = tagMapKeysAndTagMap.tagKeys[(tagMapKeysAndTagMap.tagsIndex as any)[tag]];
        
        return tagSaved;
    },
    // return class for chose tag 
    tagClass: function (tag: string): string {
        const tagSaved: string = tagClassArr[(tagMapKeysAndTagMap.tagsIndex as any)[tag]];
        
        return tagSaved;
    },
}