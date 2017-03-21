import React, { Component } from 'react'

import './SpotifyCard.css'

class SpotifyCard extends Component {

    // THIS COMPONENT TAKES A 'data' object as "props"
    //DATA FORMAT SENT BY THE API :
    /*
        album_data =
        {
            "album_type" : "album",
  "artists" : [ {
    "external_urls" : {
      "spotify" : "https://open.spotify.com/artist/2BTZIqw0ntH9MvilQ3ewNY"
    },
    "href" : "https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNY",
    "id" : "2BTZIqw0ntH9MvilQ3ewNY",
    "name" : "Cyndi Lauper",
    "type" : "artist",
    "uri" : "spotify:artist:2BTZIqw0ntH9MvilQ3ewNY"
  } ],


       
        }
    */

    
    render() {

        //const album_data = this.props.album_data
        const { album_type,artists ,name } = this.props

        return (


            <div className="col s12 m7">
                <div className="card horizontal">

                    <div className="card-image">
                        <img alt="" className="spotify-image" src={ picture } />
                        <span className="card-title">Book information</span>
                    </div>

                    <div className="card-content">
                        <div className="row" >
                            <table>
                                <tbody>
                                    <tr>
                                        <td width={ 100 }>album_type :</td>
                                        <td width={ 200 }>
                                            <span> { author }</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width={ 100 } >artists :</td>
                                        <td width={ 200 }>
                                            <span> { title }</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width={ 100 } >name :</td>
                                        <td width={ 200 }>
                                            <span> { mark }</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>





        )
    }

}

export default SpotifyCard