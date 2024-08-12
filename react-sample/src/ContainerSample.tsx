import React from "react";

// Title を渡すための Context を作成します
const TitleContext = React.createContext('')

// Title コンポーネントの中で Context を参照します
const Title = () => {
    // Consumer を使って、Context の値を参照します
    return (
        <TitleContext.Consumer>
            {/** Consumer 直下に関数を置いて、Context の値を参照します */}
            {(title) => {
                return <h1>{title}</h1>
            }}
        </TitleContext.Consumer>
    )
}

const Header = () => {
    return (
        <div>
            {/** Heder から Titile へは何もデータを渡しません */}
            <Title />
        </div>
    )
}

// Container の props の型を定義します
type ContainerProps = {
    title: string
    children: React.ReactNode
}



// Conteiner は赤背景のボックスの中にタイトルと子要素を表示します
const Container =(props: { title: string; children: React.ReactElement }) => {
    const { title, children } = props

    return (
        <div style={{background: 'red' }}>
            <span>{title}</span>
            {/* props の children を埋め込むと、このコンポーネントの開始タグと閉じたタグで囲んだ要素を表示します */}
            <div>{children}</div>
        </div>
    )
}

const Parent = () => {
    return (
        // Container を使用する際に、ほかの要素を囲って使用する
        <Container title="Hello">
            <p>ここの部分が背景色で囲まれます</p>
        </Container>
    )
}

export default Parent