// a container inside of a Movie that houses Review components.
import ReviewForm from "./ReviewForm"
import { useState } from "react"

let reviews = []
console.log(reviews)


export default function ReviewList() {
    const [reviewValue, setReviewValue] = useState("")

    const uploadReview = (event) => {
        const review = {
            text: document.getElementById('review').value,
        }
        event.preventDefault()
        reviews.push(review)
        console.log(reviews[0].text)
        console.log(reviews)
        setReviewValue("")
    }

    return (
        <div>
            <ReviewForm reviewVal={reviewValue} changeReview={(e) => setReviewValue(e.target.value)}/>
            <button className="btn btn-primary mt-1" onClick={uploadReview}>Submit</button>
            <div>
                <p>{reviewValue}</p>
            </div>
        </div>
    )
}