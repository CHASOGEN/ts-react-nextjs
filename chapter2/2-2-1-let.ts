// fisrtName の後ろに string の型をつけることで、文字列以外の型を渡せないようにする
function sayHello (firstName:string){
    console.log(`Hello`+firstName)
}

let firstName:string = `Takuya`
sayHello(firstName)


// number 型を引数として渡した場合、コンパイル時に以下のエラーが発生します。
// error TS2345: Argument of type `number` is not assignable to parameter of type `string`

/*
let age: number = 36
sayHello(age)
*/

let employeeName = `Jhon`