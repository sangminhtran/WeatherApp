const yargs = require("yargs");
const axios = require("axios");

const argv = yargs
  .option({
    a: {
      demand: true,
      alias: "address", //quy ước viết tắt của address => -a
      describe: "Enter address",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;

console.log(argv);
address = argv.address;

const key = "AIzaSyCpffFx5sZstG6aclYoEnodK4Nj5DF14F4";
const geoUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=${key}&address=${address}`;
axios
  .get(geoUrl)
  .then(res => {
    //console.log(res.data);

    //if(res.data.status === "ZERO_RESULTS") throw new Error("Not found");          //cách quăng lỗi 1
    if (res.data.status === "ZERO_RESULTS")
      return Promise.reject({ myWarning: "Not found" }); //quăng lỗi cách 2

    console.log(res.data.results[0].formatted_address);
    const lat = res.data.results[0].geometry.location.lat;
    const lng = res.data.results[0].geometry.location.lng;
    
    const darkskyUrl = `https://api.darksky.net/forecast/f5f37b509384ce8dba081df4bfa40104/${lat},${lng}`;
    return axios.get(darkskyUrl);
  })
  .then(res => {
    console.log(`Summary: ${res.data.currently.summary}`);
    console.log(`Temperature: ${res.data.currently.temperature}`);
  })
  .catch(err => {
    if (err.myWarning) return console.log(err.myWarning); //quăng lỗi cách 2

    return console.log("Can not connect to Google API"); //quăng lỗi cách 2
  });
