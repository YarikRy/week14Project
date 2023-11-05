// A text review a user can leave on a movie.

export default function Review(props) {

    return (
        <div>
        <label htmlFor="review">Review: </label>
        <input type="text" id="review" className="form-control" value={props.reviewVal} onChange={props.changeReview}></input>
        </div>
    )
}