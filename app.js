const request = require('request');
const yargs = require('yargs');
const {key} = require('./hideKey.js');
 
const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress = encodeURIComponent(argv.a);

console.log(encodedAddress);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${key} `,
    json: true
}, (error, response, body) => {
     console.log(`Address: ${body.results[0].formatted_address}`);
     console.log(`latitude: ${body.results[0].geometry.location.lat}`);
     console.log(`longitude: ${body.results[0].geometry.location.lng}`);
});
