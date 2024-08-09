let postStatus: 'draft' | 'published' | 'deleted'
postStatus = 'draft'
// postStatus = 'drafts' // 宣言にない文字列が割り当てられているため、コンパイル時にエラー

// -1、0、1 いずれかしか返さない型情報を定義します
function compare(a:string, b: string):-1 | 0 | 1 {
    return a === b ? 0 :a > b ? 1 : -1
}