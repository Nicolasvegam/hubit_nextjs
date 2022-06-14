import React from 'react';

class ChatwootWidget extends React.Component {

  componentDidMount () {

    window.chatwootSettings = {
      hideMessageBubble: false,
      position: 'right', // This can be left or right
      locale: 'en', // Language to be set
      type: 'standard', // [standard, expanded_bubble]
    };

    // Paste the script from inbox settings except the <script> tag
    (function(d,t) {
        var BASE_URL="https://app.chatwoot.com";
        var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
        g.src=BASE_URL+"/packs/js/sdk.js";
        g.defer = true;
        g.async = true;
        s.parentNode.insertBefore(g,s);
        g.onload=function(){
          window.chatwootSettings = {
                type: 'expanded_bubble',
                 launcherTitle: 'Háblanos aquí',
                 showPopoutButton: true
          }
          window.chatwootSDK.run({
            websiteToken: '1b3Jp4HLE16MMqFNSNDybyX6',
            baseUrl: BASE_URL
            
          })
        }
      })(document,"script");
  }

  render () {
    return null;
  }
}

export default ChatwootWidget