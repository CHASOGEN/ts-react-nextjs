// GetServerSideProps : サーバサイドレンダリング(SSR)機能
// NextPage ： ページコンポーネントの型定義のこと Props として受け取るデータの型を指定できる
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

type SSRProps = {
    message: string
}

const SSR: NextPage<SSRProps> = (props) => {
    const { message } = props

    return (
        <div>
            <Head>
                <title>
                    <link rel="icon" href="/favicon.ico" />
                </title>
            </Head>
            <main>
                <p>
                    このページはサーバサイドレンダリングによってアクセス時にサーバで描画されたページです。
                </p>
                <p>{message}</p>
            </main>
        </div>
    )
}

// getServerSidePros はページへのリクエストがある度に実行される
export const getServerSideProps: GetServerSideProps<SSRProps> = async (
    context
) => {
        const timestamp = new Date().toLocaleString()
        const message = `${timestamp}にこのページの getServerSideProps が実行されました`
        console.log(message)

        return {
            props:{
                message
        }
    }
}

export default SSR
