
const yargs = require("yargs");

const callGeolocation = require('./services/geolocation'); //gọi module đc export từ file geolocation
const darksky = require('./services/darksky');

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

callGeolocation(address, (error, result)=>{

  if(error) return console.log(error);

  darksky(result.lat, result.lng);
});


