const request = require("request");

//callbacl do chúng ta tự định nghĩa
//callback(error, result)
//error: string
//result: object {lat, lng}
const  callGeolocation = (address, callback)=> {
  const key = "AIzaSyCpffFx5sZstG6aclYoEnodK4Nj5DF14F4";
  const url = `https://maps.googleapis.com/maps/api/geocode/json?key=${key}&address=${address}`;
  request({ url, json: true }, function(error, response, body) {
    

    //clean code
    if (error) return callback("Can not connect to Google API", null);
    if (body.status === "ZERO_RESULTS") return callback("Address not found", null);

    const lat = body.results[0].geometry.location.lat;
    const lng = body.results[0].geometry.location.lng;
    //console.log(body.results[0].formatted_address);
    
    callback(null, {lat, lng});
    //return { lat, lng };
  });
}

module.exports = callGeolocation; //export 1 module như bt nhưng đc gọi = require

// module.exports = {   //export nhiều module
//     callGeolocation
// }
