// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
    ADMIN = 10, // 할당하지 않아도 자동으로 0, 1, 2번 할당 된다. 
    USER = 15,
    GUEST
}

enum Language {
    korean = 'ko',
    english = 'en'
}

const user1 = {
    name: "이정환",
    role: Role.USER,
    language: Language.english
}

const user2 = {
    name: "홍길동",
    role: Role.ADMIN
}

const user3 = {
    name: "이아무개",
    role: Role.GUEST
}

console.log(user1, user2, user3);