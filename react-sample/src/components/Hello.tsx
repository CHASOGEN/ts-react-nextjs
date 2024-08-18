// Hello はクリックするとアラートを出すテキストを返します
const Hello = () => {
    // クリック時に呼ばれる関数
    const onClick = () => {
        // アラートを出す
        alert(`hello`)
    }


const text = `Hello,React`

// テキストを子に持つ div 要素を返す
    return (
        // div の onClick にクリック時のコールバック関数を渡す
        <div onClick={onClick}>
            {text}
        </div>
    )
}

export default Hello