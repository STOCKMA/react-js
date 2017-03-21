/* ROOT Component of your App  */
import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import picture from './album-image.png'


const Materialize = window.Materialize
var xmlToJSON = window.xmlToJSON

const APP_TITLE = 'Who is the singer?'
//update document title (displayed in the opened browser tab)
document.title = SPOTIFY_API

//web api utils
import { get, ENDPOINTS } from './utils/api'

//components
import SpotifyCard from './components/SpotifyCard'

class App extends Component {

    constructor( props ) {
        super( props )
        this.state = {
            album_data: undefined,
            name: '',
        }
    }

    render() {
        return (
            <div className="App">

                <div className="App-header">
                    <h1>{ APP_TITLE } &nbsp; </h1>
                    <img src={ logo } className="App-logo" alt="logo" />
                </div>

                <div className="body">
                    <img alt="" className="album-image" />
                </div>

                <div className="App-content">


                    <div className="center-align">
                        <form onSubmit={ this.fetchSpotifyCard } >

                            <div className="input-field col s6 offset-s3" >
                                <label htmlFor="book_title">Books title</label>
                                <input id="name" type="text" value={ this.state.name } onChange={ this.handleChange } />
                            </div>

                            <button type="submit" className="waves-effect waves-red btn"> Find author</button>

                        </form>
                    </div>
                    <div className="row" style={ { marginTop: 50 } } >
                        <div className="display info">{ this.displayAlbumData() }</div>
                    </div>

                </div>

            </div>

        )
    }

    handleChange = ( event ) => {
        this.setState( {
            title: event.target.value
        } )
    }


    //method triggered by onSubmit event of the form or by onClick event of the "Weather?" button
    /* Arrow function syntax used for Autobinding, see details here : https://facebook.github.io/react/docs/react-without-es6.html#autobinding */
    fetchSpotifyCard = async ( event ) => {

        event.preventDefault()

        /* ASYNC - AWAIT DOCUMENTATION : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/await */

        try {
            let album_data = await get( ENDPOINTS.SPOTIFY_API_URL, {
                
                //Query: the name of the singer
                q: this.state.name,
            } )

            //data format JSON car format XML initiallement 
            var dataJson = xmlToJSON.parseString( album_data, {
                childrenAsArray: false
            } )

            var Ar = dataJson.SpotifyCardResponse
                      if ( Ar.length > 1 )
                this.setState(
                    {
                        album_data: dataJson.SpotifyCardResponse
                    }
                )
            else {
                this.setState(
                    {
                        album_data: [ dataJson.SpotifyCardResponse]
                    }
                )
            }
        }

        catch ( error ) {
            Materialize.toast( error, 8000, 'error-toast' )
            console.log( 'Failed fetching data: ', error )
        }

    }


    //handle display of the received weather object
    displayMovieInfo = () => { 
         const name = this.state.name 
 

         if ( name ) { 
             return ( 
                 <SpotifyCard data={ name } /> 
             ) 
         } 
 
 
         return null 
     } 

    }

};

export default App
