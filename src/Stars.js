// a one to five-star rating component that allows users to rate something (movies in this case, but remember that components are reusable, so you could use it elsewhere!)

import React, { Fragment, useState } from 'react'
import {FaStar} from 'react-icons/fa'

export default function Star(props){
    const [rating, setRating] = useState("")

    return (
        <div>
            
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1

                return (
                    <Fragment key={i + 1}>
                    <label>
                        <input className="none" type='radio' name='rating' value={rating} onClick={() => (setRating(ratingValue))}/>
                        <FaStar className="star" color={ratingValue <= rating ? '#ffc107' : '#e4e5e9'} size={30}/>
                    </label>
                    </Fragment>
                )
            })}
        </div>
    )
}