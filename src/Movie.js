// A COMPONENT TO REPRESENT MOVIE DATA SUCH AS IMAGES, SYNOPSIS, RATING, ETCC.....

import movieData from './MovieList'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'
import ReviewList from './ReviewList'

export default function Movie(props) {
    return ( 
        <div className='card mb-3 col-6' id={props.id}>
            <img src={props.movieImg} className='card-img-top'/>
            <div className='card-body'>
                <h5 className='card-title'>{props.genre}: {props.movieName}</h5>
                <p className='card-text'>{props.synopsis}</p>
                <ReviewList name={props}/>
            </div>
        </div>
    )
}
