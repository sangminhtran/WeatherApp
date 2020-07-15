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

//const tenHam = async() => {await tacVuBatDongBo}
const callGeolocation = async address => {
  const key = "AIzaSyCpffFx5sZstG6aclYoEnodK4Nj5DF14F4";
  const geoUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=${key}&address=${address}`;
  //const res = await axios.get(geoUrl);

  let res;
  try {
    res = await axios.get(geoUrl);
    if(res.data.status === "ZERO_RESULTS") return console.log("Not Found")
  } catch (error) {
      console.log("Can not connect");
  }
  
  console.log(res.data.results[0].formatted_address);
  const lat = res.data.results[0].geometry.location.lat;
  const lng = res.data.results[0].geometry.location.lng;

  await callDarkSky(lat, lng);
};

const callDarkSky = async (lat, lng) => {
  const res = await axios.get(
    `https://api.darksky.net/forecast/f5f37b509384ce8dba081df4bfa40104/${lat},${lng}`
  );
  console.log(`Summary: ${res.data.currently.summary}`);
  console.log(`Temperature: ${res.data.currently.temperature}`);
};

callGeolocation(address);
