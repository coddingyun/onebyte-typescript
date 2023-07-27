//any
//측정 변수의 타입을 우리가 확실히 모를때

let anyVar : any = 10;
anyVar = "Hello";
anyVar = true;
anyVar.toUpperCase(); // 런타임에 오류 발생, any는 타입스크립트의 이점을 다 포기한다는 의미

let num:number = 10;
num = anyVar;

//unknown

let unknownVar: unknown;
unknownVar = "";
unknownVar = 100;
unknownVar = true;

// num = unknownVar; //모든 타입의 변수에 못넣는다, 사칙연산 다 안된다, 함수들도 안된다.

// 타입 정제하여 해야됌
if (typeof unknownVar === "number") {
    num = unknownVar;
}

