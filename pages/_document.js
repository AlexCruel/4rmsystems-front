import { Html, Head, Main, NextScript } from 'next/document'

export default function Document({ ...props }) {
  return (
    <Html prefix="og:https://ogp.me/ns#">
        <Head>
            <meta name="robots" content="index, follow"/>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
