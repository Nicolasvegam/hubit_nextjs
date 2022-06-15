import Script from "next/script";
export function ScriptTypeform() {
    
    return (
      <>
        <Script src="https://embed.typeform.com/next/embed.js" id="typeform-script" strategy="beforeInteractive"/>
      </>
    );
  }