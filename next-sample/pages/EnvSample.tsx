import { NextPage } from "next";
import Head from "next/head";

const EnvSample:NextPage = (props) => {
    // サーバーサイドで描画するときは'test1'と表示され、クライアントサイドで再描画するときは undefined と表示される
    console.log('process.env.TEST',process.env.TEST)
    // 'test2' と表示される
    console.log('process.env.NEXT_PUBLIC_TEST',process.env.NEXT_PUBLIC_TEST)

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                {/**サーバーサイド描画時は'test1'と表示されクライアントサイドで再描画されると何も表示されない */}
                <p>{process.env.NEXT_PUBLIC_TEST}</p>
            </main>
        </div>
    )
}

// getStaticProps は常にサーバーサイドで実行されるので、すべての環境構築変数を参照できる
export const getStaticProps = async (context:any) => {
    // 'test1'が表示される
    console.log('process.env.TEST',process.env.TEST)
    // 'test2' と表示される
    console.log('process.env.NEXT_PUBLIC_TEST',process.env.NEXT_PUBLIC_TEST)

    return {
        props:{}
    }
}

export default EnvSample