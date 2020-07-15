const request = require("request");

function darksky(lat, lng){
    request(
        {
          url: `https://api.darksky.net/forecast/f5f37b509384ce8dba081df4bfa40104/${lat},${lng}`,
          json: true
        },
        (error, response, body) => {
          console.log(`Summary: ${body.currently.summary}`);
          console.log(`Temperature: ${body.currently.temperature}`);
        }
      );
}

module.exports = darksky;