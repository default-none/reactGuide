


const first = () => {
   console.log('안녕하세요');

}

const fruit = ['사과','배','포도'];
// const MyFruit = fruit[0];
// const MyFruit2 = fruit[1];
// const MyFruit3 = fruit[2];

const [MyFruit, MyFruit2, MyFruit3] = ['사과','배','포도'];
const apple = {
    color : 'red',
    kind : 'fruit',
    taste : 'good'
}
// const h1 = document.querySelector('.hi');
// console.log(h1.props);
// const col = apple.color
// const color = () => {
//     console.log(col);
// }
// const kin = apple.kind

// const kind = () => {
//     console.log(kin)
// }
// const tas = apple.taste;
// const taste = () => {
//     console.log(tas)
// }
// const [col, kin, tas] = [apple.color, apple.kind, apple.taste]
const {color, kind, taste} = {
    color : 'red',
    kind : 'fruit',
    taste : 'good'
}


const obj = {...apple};


const number = 3;

let num 

const second = () => {
    num = 3;
    console.log(number);
    console.log(color,kind,taste);
    console.log(`${JSON.stringify(obj)}`);
    

}
const consoleFruit = () => {
    console.log(MyFruit);
}

export {first, second, consoleFruit};