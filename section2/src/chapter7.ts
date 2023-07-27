// void
// 공허 = >  아무것도 없다
function func1(): string {
    return "Hello"
}

function func2(): void {
    console.log("Hello");
}

let a:void;
a = undefined; // void에 undefined만 넣을 수 있다

//never
// 존재하지 않는, 불가능한 타입

function func3():never {
    while (true) {

    }
}

function fun4():never {
    throw new Error();
}

let b:never;
// 아무런 값도 절대 담을 수 없다.