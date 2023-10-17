//비구조화 할당 문법 === 구조 분해 할당 문법
//배열의 경우.

//기본 할당 배열▼//
const arr = [1, 2, 3];
const x = arr[0];
const y = arr[1];
const z = arr[2];
//비구조화 할당▼//
const [a, b, c] = [1, 2, 3];

const deArr = [...arr]; //전개 연산자, arr의 객체를 전개하여 새로운 배열을 생성.
//출력▼//
const TestArr = ()=>{
    return(console.log(`기본 할당 배열: ${x}, ${y}, ${z} 기존 배열 : ${arr} 비구조 할당 배열 : ${a}, ${b}, ${c}, 전개 연산 : ${deArr}`))
}

//객체의 경우.

//기본 할당 객체▼//
const obj = {
    X : 'value1',
    Y : 'value2',
    Z : 'value3',
}
const X = obj.X;
const Y = obj.Y;
const Z = obj.Z;

//비구조화 할당▼//
const {A, B, C} = {                             
    A : 'value1',
    B : 'value2',
    C : 'vallu3',
}                                                       
const deObj = {...obj} //전개 연산자
const TestObj = ()=>{
    return(console.log(`기본 구조 객체 = X : ${X}, Y : ${Y}, Z : ${Z} 기존 객체 : ${JSON.stringify(obj)} 비구조 할당 객체 = A : ${A}, B : ${B}, C : ${C} 전개 연산 : ${JSON.stringify(deObj)}`))
}
 
export {TestArr, TestObj};