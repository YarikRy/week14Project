// A text review a user can leave on a movie.

import { useState } from "react"

export default function Review() {

    const [reviewValue, setReviewValue] = useState("")

    return (
        <div>
        <label htmlFor="review">Review text: </label>
        <input type="text" id="review" className="form-control" value={reviewValue} onChange={(event) => setReviewValue(event.target.value)}></input>
        </div>
    )
}