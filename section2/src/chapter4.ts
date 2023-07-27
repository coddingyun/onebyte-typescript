// 타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
}

let user: User = {
    id: 1,
    name: "tody",
    nickname: "winterwood",
    birth: "1998"
}

// 인덱스 시그니처 : key 와 value의 규칙을 정해준다.
// 빈 객체도 오류가 없이 나온다.
type CountryCodes = {
    [key : string] : string;
}
let countryCodes : CountryCodes = {
    Korea: 'ko',
    UnitedStated: 'us',
    UnitedKingdom: 'uk'
}

type CountryNumber = {
    [key : string] : number;
    Korea: number; // Korea 무조건 있어야 할때
    // 추가적인 것도 인덱스 시그니처랑 일치하거나 호환되어야 한다.
}

let countryNumberCodes: CountryNumber = {
    Korea: 410,
    UnitedKingdom : 820
}