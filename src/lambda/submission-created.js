var axios    = require('axios');

// load environment variables
require('dotenv').config()


export function handler(event, context, callback) {

  console.log('event.payload :', event.payload);

  // we'll fetch hooks from the subscriptions form entries
  var oauth_token = process.env.NETLIFY_TOKEN;
  var formID = "5b7f4899daeb0a4d15ee3998";
  var url = `https://api.netlify.com/api/v1/forms/${formID}/submissions/?access_token=${oauth_token}`;

  axios.get(url)
    .then(function (response) {
        var body = response;
        console.log('response :', response);
        // hooks.forEach(url => {
        //   request.post(url);
        //   console.log('Notifying :', url);
        // });
        // console.log(`Deploy hooks for ${hooks.length} subscribers were called`);
        return;

    })
    .catch(function (error) {
      console.log(error);
    });

};

