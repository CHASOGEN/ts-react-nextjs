
const array:string[] = []
array.push(`Takuya`)
//array.push(1) // 配列の型と合わないためエラーになる

const mixedArray = [`foo`,1]
const mixedArrayU:(string|number)[] = [`foo`,1] // Union 型
const mixedArrayT:[string,number] = [`foo`,1] //ダブル


