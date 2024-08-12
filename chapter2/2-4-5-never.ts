// エラーが常に返るような関数で決して値が正常に返らない場合に never 型を指定します
function error(message: string):never {
    throw new Error(message)
}

function foo(x: string | number | number[]):boolean {
    if (typeof x === `string`){
        return true
    } else if (typeof x === `number`){
        return false
    }

    // never を利用することで明示的に値が返らないことをコンパイラに伝えることができます
    // never を使用しないと TypeScript はコンパイルエラーになります
    return error(`Never happen`)
}

// 将来的にも定数が追加される可能性のある enum 型を定義します
enum pageType {
    ViewProfile,
    EditProfile,
    ChangePassword,
}

const getTitleText = (type: pageType) => {
    switch (type){
        case pageType.ViewProfile:
            return `Setting`
        case pageType.EditProfile:
            return `Edit Profile`
        case pageType.ChangePassword:
            return `Change Password`
        default:
            // 決して起きないことをコンパイラに伝える never 型に代入を行います
            // これによって仮に PageType の enum 型に定数が新規で使いされた際に
                // コンパイル時にエラーが起きるためバグを未然に防ぐ対応を行うことができます
        const wrongType: never = type
        throw new Error(`${wrongType} is not in PageType`)
    }
}

