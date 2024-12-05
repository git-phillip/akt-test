"use client";
import Script from "next/script";

export default function Analytics() {
  return (
    <>
      {process?.env?.GTM_ENABLED === "true" ? (
        <>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process?.env?.GTM_ID}`}
              height={0}
              width={0}
              style={{
                display: "none",
                visibility: "hidden",
              }}
            />
          </noscript>
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer', '${process?.env?.GTM_ID}');
  `,
            }}
          />
        </>
      ) : null}
    </>
  );
}
