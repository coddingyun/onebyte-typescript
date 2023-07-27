/**
 * 타입 추론
 */

let a:number = 10

// 타입 넓히기
let b = 10 // number type

let c = "hello" 

// 변수의 초기값으로 타입 출원

let [one, two, three] = [1, "hello", true];

function func(message = "hello"){
    return "hello";
}

// 암묵적 any 타입 지정
// => any 타입의 진화
let d;
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();

// const -> literal type
const num = 10; // 10 number literal type
const str = "hello"

let arr = [1, "string"];