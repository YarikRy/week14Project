// a form at the bottom of a Movie component that allows users to leave reviews. When submitted, the review should be added to the movie. 
// All this data can be stored in an array, no networking or database needed for this assignment.
import { useState } from "react"
import Review from "./Review"
import Star from './Stars'

let allReviews = []

export default function ReviewForm() {
    const [nameValue, setNameValue] = useState("")
    const [rating, setRating] = useState(null)

    const uploadReview = (event) => {
        const review = {
            reviewName: document.getElementById('name').value,
            reviewRating: document.getElementById('rating').value,
            reviewText: document.getElementById('review').value,
        }
        event.preventDefault()
        allReviews.push(review)
        console.log(allReviews)
        
    }

    return (
        <form>
            <div>
                <Star/>
            </div>
            <div>
                <label htmlFor="name">Your Name: </label>
                <input type="text" className="form-control" id="name" value={nameValue} onChange={(event) => setNameValue(event.target.value)}></input>
            </div>
            <div>
                <Review/>
            </div>
            <button className="btn btn-primary mt-1" onClick={uploadReview}>Submit</button>
        </form>
    )
}