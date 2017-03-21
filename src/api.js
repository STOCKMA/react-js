import * as request from 'request-promise'


/* Spotify API */

export const ENDPOINTS = {
    //
    SPOTIFY_API_URL: 'https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj',
}

/* REQUEST (Promise) DOCUMENTATION */
/* https://github.com/request/request-promise */

export function get( url, queryParameters ) {

    //returns a Promise which can be used with the async - await syntax

    return request.get( {
        json: true,
        uri: url,
        qs: queryParameters
    } )
}