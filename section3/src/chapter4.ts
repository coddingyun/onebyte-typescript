/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재합니다.
 */

/**
 * 1. 합집합 - union타입
 */

let a: string | number | boolean;
a = 1;
a = "hello";

a = true;

let arr: (number | boolean)[] = [1, true];

type Dog = {
    name: string;
    color: string;
}

type Person = {
    name: string;
    language: string;
}

type Union1 = Dog | Person

let union1: Union1 = {
    name:"",
    color: ""
}

let union2: Union1 = {
    name: "",
    language: ""
}

let union3: Union1 = {
    name: "",
    color:"",
    language: ""
}

// 공통 name 만 있으면 오류 -> 집합에 포함이 안되서
// let union4: Union1 = {
//     name: ""
// }

/**
 * 교집합 타입 - 
 * Intersection
 */

let variable: number & string; // 보통 never가 많이 된다.

type Intersection = Dog & Person;

let intersection1: Intersection = {
    name: "",
    color: "",
    language: ""
}