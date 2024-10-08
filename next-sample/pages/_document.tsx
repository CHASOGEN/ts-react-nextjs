/*
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
*/

import Document, { DocumentContext, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

// デフォルトの Document を MyDocument で上書き
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext){
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      // 初期化を流用
      const initialProps = await Document.getInitialProps(ctx)

      // initialProps に加えて、style を追加して返す・
      return {
        ...initialProps,
        styles:[
          // もともとの style
          initialProps.styles,
          // styled-components の style
          sheet.getStyleElement()
        ],
      }
    } finally {
      sheet.seal()
    }
  }
}
