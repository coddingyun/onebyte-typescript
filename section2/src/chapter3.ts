let user: {
    id?: number; // 있어도 되고 없어도 된다는 의미
    name: string;
} = {
    id:1,
    name: "이정환"
}

let dog: {
    name: string;
    color: string;
} = {
    name: "돌돌이",
    color: "brown"
}

user = {
    name: "홍길동",
}

let config: {
    readonly apiKey: string;
} = {
    apiKey: " MY API KEY"
}