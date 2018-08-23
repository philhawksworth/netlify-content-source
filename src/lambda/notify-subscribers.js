const request = require('request');


export function handler(event, context, callback) {

  var hooks = [
    "https://foo.com",
    "https://bar.com"
  ];

  hooks.forEach(url => {
    request.post(url);
    console.log('Notifying :', url);
  });

  console.log(`Deploy hooks for ${hooks.length} subscribers were called`);
  return;
}
