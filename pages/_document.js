import { Html, Head, Main, NextScript } from 'next/document'

export default function Document({ ...props }) {
  return (
    <Html lang="en" prefix="og: https://ogp.me/ns#">
        <Head>
            <meta name="robots" content="noindex, nofollow"/>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
