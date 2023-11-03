// a form at the bottom of a Movie component that allows users to leave reviews. When submitted, the review should be added to the movie. 
// All this data can be stored in an array, no networking or database needed for this assignment.
import Review from "./Review"

let allReviews = []

export default function ReviewForm() {
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
                <label htmlFor="name">Your Name: </label>
                <input type="text" className="form-control" id="name"></input>
            </div>
            <div>
                <label htmlFor="rating">Rating 1-5: </label>
                <input type="text" className="form-control" id="rating"></input>
            </div>
            <div>
                <Review/>
            </div>
            <button className="btn btn-primary mt-1" onClick={uploadReview}>Submit</button>
        </form>
    )
}