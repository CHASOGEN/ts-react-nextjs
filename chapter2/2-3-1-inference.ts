/*
const age = 10
console.log(age.length) // エラー：age は number なので length プロパティはありません

const user = {
    name: 'Takuya',
    age: 36
}

console.log(user.age.length) // エラー：age は number 型なので length プロパティはありません


function getUser(){
    return {
        name: 'Takuya',
        age:36
    }
}

const user = getUser()
console.log(user.age.length) // エラー：age は number 型なので length プロパティはありません

const names = ['Takuya','Yoshiki','Taketo']

names.forEach((name) => {
    // string 型として扱われるので、関数名を間違えている呼び出しはコンパイル時にエラーとなります
    // 本来は toUpperCase が正しいです
    console.log(name.toUppercase())
})

// window.confirm 関数の返り値は boolean を返すことを TypeScript は知っているため
// 代入する関数の型が一致しない場合はコンパイルエラーとなります
window.confirm = () => {
    //boolean を return しない限りエラーとなります
    console.log('confirm 関数')
}

