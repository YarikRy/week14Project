// A text review a user can leave on a movie.

export default function Review() {
    return (
        <div>
        <label htmlFor="review">Review text: </label>
        <input type="text" id="review" className="form-control"></input>
        </div>
    )
}