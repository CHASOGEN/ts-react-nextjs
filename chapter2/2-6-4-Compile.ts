// noImplicitAny オプションを指定してコンパイルを実行すると以下の引数の型定義がない場合エラーとなります
// error TS7006: Parameter `word` implicitly has an `any` type

function hello(word) {
    console.log(`Hello,${name}`)
} 

hello(`Takuya`)

// 以下は動くようにしたもの
/*
function hello(word:string) {
    console.log(`Hello,${word}`)
} 

hello(`Takuya`)
*/

