

const iframe = document.createElement('iframe');
iframe.src = 'https://raki-chat-app.netlify.app/';
var style = document.createElement('style');

document.body.appendChild(iframe);

style.innerHTML = `
  iframe {
    position:fixed;
    bottom:10px;
    right:10px;
    border:none;
    width: min(300px,100%);
    height: min(700px,100%);
  }`;
document.head.appendChild(style);

