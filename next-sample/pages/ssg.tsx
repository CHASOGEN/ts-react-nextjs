// 型のために導入
import { NextPage } from 'next'
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

// ページコンポーネントは export default でエクスポートする
export default SSG
