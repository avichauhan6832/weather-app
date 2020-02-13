const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYXZpbmFzaHNhbGVzaGFuZHkiLCJhIjoiY2s2amE2eGRiMDU1ODNrcW4xOW82enhmcCJ9.0qrAiFnNovUbgcEqANvRoQ&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            console.log(error);
            callback('Unable to connect to location services!', undefined)
        }
        // else {
        //     console.log(body);
        // }
         else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode