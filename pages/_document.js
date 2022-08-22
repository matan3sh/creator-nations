import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta itemProp="name" content="CreatorNations.com" />
          <meta
            itemProp="description"
            content="Join global crypto leaders, VC firms and promising blockchain
          companies unveiling the future trends from the world’s top NFT"
          />
          <meta itemProp="image" content="/images/metadata_img.png" />

          <meta property="og:url" content="https://creatornations.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="CreatorNations.com" />
          <meta
            property="og:description"
            content="Join global crypto leaders, VC firms and promising blockchain
          companies unveiling the future trends from the world’s top Crypto
          Week!"
          />
          <meta property="og:image" content="/images/metadata_img.png" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="CreatorNations.com" />
          <meta
            name="twitter:description"
            content="Join global crypto leaders, VC firms and promising blockchain
          companies unveiling the future trends from the world’s top NFT"
          />
          <meta name="twitter:image" content="/images/metadata_img.png" />

          {/* Facebook Pixel Code */}
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '1271768096535536');
                fbq('track', 'PageView');`,
            }}
          />

          {/* Global site tag (gtag.js) - Google Ads: 433885515 */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-804331550"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `      window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', 'AW-804331550');`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
