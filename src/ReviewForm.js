// a form at the bottom of a Movie component that allows users to leave reviews. When submitted, the review should be added to the movie. 
// All this data can be stored in an array, no networking or database needed for this assignment.
import { useState } from "react"
import Review from "./Review"
import Star from './Stars'


export default function ReviewForm(props) {

    return (
        <form>
            <div>
                <Star/>
            </div>
            <div>
                <Review/>
            </div>
        </form>
    )
}