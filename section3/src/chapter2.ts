// unknown 최상위
// 모든 것이 업캐스팅 가능
// 다운캐스팅은 다 불가능
function unknownExam() {
    let a : unknown = 1;
    let b : unknown = true;
}

// never 타입
// 모든 타입의 서브타입
// 공집합
function neverExam(){
    function neverFunc() : never {
        while(true) {}
    }

    let num: number = neverFunc();

    // let never1 : never = num
}

// void
function voidExam(){
    function voidFunc(): void{
        console.log('hi');
    }

    let voidVar: void = undefined;
}

// any
// 치트키
// 모든 타입의 슈퍼타입이자 서브타입
function anyExam(){
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar;
    
    undefinedVar = anyVar;

    // neverVar = anyVar;
}