import { Html, Head, Main, NextScript } from 'next/document'

export default function Document({ ...props }) {
  return (
    <Html prefix="og:https://ogp.me/ns#">
        <Head>
        {/*    <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':*/}
        {/*          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],*/}
        {/*      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=*/}
        {/*      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);*/}
        {/*  })(window,document,'script','dataLayer','GTM-TNK7DJKQ');`}}></script>*/}
        {/*    <script dangerouslySetInnerHTML={{ __html: `(function(w,d,u){*/}
        {/*        var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);*/}
        {/*        var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);*/}
        {/*})(window,document,'https://bx.1ak-group.com/upload/crm/site_button/loader_1_1cfjjz.js');` }}></script>*/}
        {/*    <meta name="yandex-verification" content="37a94647988229ec" />*/}
        </Head>
      <body>
      {/*<noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TNK7DJKQ"*/}
      {/*                  height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>*/}
      <Main />
        <NextScript />
      </body>
    </Html>
  )
}
