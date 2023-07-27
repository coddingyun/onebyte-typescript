// 객체 타입간의 호환성
// 프로퍼티가 더 적은 것이 슈퍼타입

type Animal = {
    name: string;
    color: string;
};

type Dog = {
    name: string;
    color: string;
    breed: string;
};

let animal: Animal = {
    name: "기린",
    color: "yellow",
};

let dog: Dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
};

animal = dog;

// dog = animal;

// 초과 프로퍼티 검사 -> 할당이나 매개변수로 쓸때
// let dog2 : Animal ={
//     name: "돌돌이",
//     color: "brown",
//     breed: "진도",
// }