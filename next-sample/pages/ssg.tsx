
// 型のために導入
// import { timeStamp } from 'console'
import { GetStaticProps, NextPage, NextPageContext } from 'next'
// Next.js の組み込みのコンポーネント
import Head from 'next/head'

// ページコンポーネントの　props の型定義（ここでは空）
type SSGProps = {}

// SSG 向けのページを実装
// NextPage は Next.js の Pages 向けの型
// NextPage<props> で props が入る Page であることを明示
const SSG: NextPage<SSGProps> = () => {
    return (
        <div>
            {/**Head コンポーネントで包むと、その要素は <head> タグに配置されます */}
            <Head>
                <title>Static Site</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p>
                    このページは静的サイト生成によってビルド時に生成されたページです
                </p>
            </main>
        </div>
    )
}

// getStaticProps はビルド時に実行される
// GetStaticProps<SSG> は SSGProps を引数にとる getStaticProps の型
export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
    const timestamp = new Date().toLocaleString()
    const message = `${timestamp} に getStaticProps が実行されました`
    console.log(message) 
    return {
        // ここで返した props をもとにページコンポーネントを描画する
        props:{
            message,
        },
    }
}



// ページコンポーネントは export default でエクスポートする
export default SSG
