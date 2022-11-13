// ============================================ Get modules ===========================================
import './style.scss';
import { manageElemInHTML } from './modules/manageElemInHtml';
import { createTag } from './modules/createTag';

import Person from './modules/person';
// import '../view/index.hbs';

// ============================================ Get elem ===========================================

const body: HTMLElement = document.body;

// ============================================ FUNCTIONS ===========================================

// ======================================== Action ======================================== 

/* 
const obj: {
    name: string,
    surname: string | undefined,
    age?: number
} = {
    name: 'vasa',
    surname: undefined,
    // age: 123,
};

const matrix: (number | string)[][][] = [
    [['age-1'], [8]],
    [['age-2'], [65]],
    [['age-3'], [12]],
];

let tumple: [string, number][];

tumple = [
    ['age', 123],
];
tumple.push(
    ['qwe', 123]
);
*/


// publiczny prywatny klucz
// private password = 5
// hash func = 10
// public password = key: 50 = password * hF
// proverka public: pubPassword * hF = 500 => zly klucz
// proverka private: privPassword * hF = 50 => dobry klucz

// test projekt, zrobic login z zapisaniem dannych i logowaniem
class User {
    private info: {
        name: string;
        age: number;
        email: string;
        password: number;
    };
    protected hashUser: number;
    protected publicKey: number;

    protected hashKeyGenerator(email: string): number {
        const counter: number = Math.floor(Math.random() * ((Math.random() * 1000) * (email.length * email.length)));

        let hash: number = 2;

        for (let i: number = 0; i < counter; i++) {
            hash += Math.random() * 100;
        };

        return hash;
    };

    protected publicKeyGenerator(key: number, hash: number): number {
        return key * hash;
    };

    constructor(props: {
        name: string,
        age: number,
        email: string,
        password: number,
    }) {
        this.info = props;
        this.hashUser = this.hashKeyGenerator(props.email);
        this.publicKey = this.publicKeyGenerator(props.password, this.hashUser);
        /*  this.info.name = props.name;
            this.info.age = props.age;
            this.info.email = props.email;
            this.info.password = props.password;*/
    };

    public getUser(keyPassword: number, keyUserName: string): void {
        const testHashedKey = this.publicKeyGenerator(keyPassword, this.hashUser)

        if (testHashedKey === this.publicKey && keyUserName === this.info.name) {
            console.log('hashUser: ', this.hashUser);
            console.log('publicKey: ', this.publicKey);
            console.log('info: ', this.info);
        } else {
            console.log("User keys are wrong");
        };
    };

    public publicMethod(keyPassword: number): string[] | void {
        if (keyPassword === this.publicKey) {
            return ['some data'];
        };
    };
};

function userGenerator(count: number) {
    let genUsers: User[] = []

    const arrOfNames: string[] = [
        'vasa', 'ola',
        'kola', 'andrey',
        'bob', 'john'
    ];
    const arrOfAges: number[] = [
        25, 11,
        98, 47,
        23, 12
    ];
    const arrOfEmails: string[] = [
        'vasa26@email.com',
        'obikobi@email.com',
        'boy@email.com'
    ];
    const arrOfPasswords: number[] = [
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
    ];

    for (
        let i: number = 0;
        i < count;
        i++
    ) {
        genUsers.push(
            new User({
                name: arrOfNames[Math.floor(Math.random() * arrOfNames.length)],
                age: arrOfAges[Math.floor(Math.random() * arrOfAges.length)],
                email: arrOfEmails[Math.floor(Math.random() * arrOfEmails.length)],
                password: arrOfPasswords[Math.floor(Math.random() * arrOfPasswords.length)],
            }),
        );
    };

    return genUsers;
};

const arr: User[] = userGenerator(1);
console.log(arr);

// arr[1].getUser(100, 'vasa');


function get1(obj: User, publicKey: number, name: string): void {
    obj.getUser(publicKey, name);
};

get1(arr[0], 123, 'kot')
// const newUser01 = new User({
//     name: 'vasa',
//     age: 26,
//     email: 'vasa26@email.com',
//     password: 100
// });

// console.log(  );
// newUser01.getUser(100, 'vasa')

// const word: string = 'vasa';
// word.length;




