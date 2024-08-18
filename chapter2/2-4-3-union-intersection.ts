// 変数や引数の宣言時に Union 型を指定して、number もしくは string を受け付けることができます
/*
function printId(id: number | string){
    console.log(id)
}
*/

// number でも正常に動作します
printId(11)
// string でも正常に動作します
printId(`22`)

type Id = number | string

function printId(id: Id){
    console.log(id)
}

type Identity = {
    id: number | string
    name: string
}

type Contact = {
    name: string;
    email: string;
    phone: string;
}

// 和集合による新たな Union の型を定義します
// Identity もしくは Contact の型を受けることが可能です
type IdentityOrContact = Identity | Contact

// OK
const id: IdentityOrContact = {
    id: `111`,
    name: `Takuya`
}

const contact: IdentityOrContact = {
    name: `Takuya`
    email: `test@example.com`
    phone: `012345678`
}

// 先述の Identity と Contact を定義
// 積集合による新たな intersection 型の定義をします
// Identity と Contact の両方のすべてのプロパティがマージされた型として扱います
type Employee = Identity & Contact

// OK 
const employee: Employee = {
    id: `111`,
    name: `Takuya`,
    email: `test@example.com`,
    phone: `012345678`
}

/*
// エラー：Contact 情報のみで変数を定義できません。id が必要です
const employeeContact: Employee = {
    name: `Takuya`,
    email: `test@example.com`,
    phone: `012345678`
}

*/