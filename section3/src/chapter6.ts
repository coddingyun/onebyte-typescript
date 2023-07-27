/**
 * 타입 단언
 * Type Assertion
 */

type Person = {
    name: string;
    age: number;
};

let person = {} as Person;
person.name = "이정환";
person.age = 27;

type Dog = {
    name: string;
    color: string;
}

let dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

// 교집합이 없기 때문에 실패
// let num3 = 10 as string;
let num3 = 10 as unknown as string;

/**
 * const 단언
 */

let num4 = 10 as const;

// read-only property로 바꿔준다
let cat = {
    name: "야옹이",
    color: "yellow"
} as const;

/**
 * Non Null 단언
 */

type Post = {
    title: string;
    author?: string;
};

let post: Post = {
    title: "게시글1",
    author : "이저오한"
};

// 옵셔널 체이닝 
// undefined가 될 수도 있어서 오류 => ?을 !로 바꾸기
// !이면 null이나 undefined가 아니라고 타입스크립트 컴파일러가 믿도록 만들어준다
const len: number = post.author!.length;

