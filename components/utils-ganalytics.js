import Script from "next/script";

export function ScriptAnalyticsGA() {
    
    return (
      <>
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-GH5NVHHKZF"
        />

        <Script id="google-analytics-exec" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag("js", new Date());
            
            gtag("config", "G-GH5NVHHKZF");
          `}
        </Script>
      </>
    );
  }