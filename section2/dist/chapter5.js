// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 10] = "ADMIN";
    Role[Role["USER"] = 15] = "USER";
    Role[Role["GUEST"] = 16] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "이정환",
    role: Role.USER,
    language: Language.english
};
const user2 = {
    name: "홍길동",
    role: Role.ADMIN
};
const user3 = {
    name: "이아무개",
    role: Role.GUEST
};
console.log(user1, user2, user3);
export {};
