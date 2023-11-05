// A CONTAINER TO HOLD ALL OF THE MOVIES AND THEIR DATA
import { Fragment } from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'
import Movie from './Movie'
import ReviewList from './ReviewList'

let movieData = [
    {
        genre: "Action",
        movieName: "Avengers: Endgame",
        movieImage: "https://images.moviesanywhere.com/4677177f6f0595289bc3e767e7b47459/1d6c6c73-ab1e-4453-969c-6a4e965ebb37.jpg",
        synopsis: "In the epic conclusion to the Marvel Cinematic Universe's Infinity Saga, the Avengers embark on a mission to undo the devastating effects of Thanos' snap, which wiped out half of all life in the universe. They must confront their past and make ultimate sacrifices to save the world.",
        key: 1,
    },
    {
        genre: "Drama",
        movieName: "The Shawshank Redemption",
        movieImage: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
        synopsis: "The film tells the story of Andy Dufresne, a banker wrongly convicted of murder, as he forms a deep bond with fellow inmate Red while trying to maintain hope and find redemption within the harsh walls of Shawshank State Penitentiary.",
        key: 2,
    },
    {
        genre: "Science Fiction",
        movieName: "Inception",
        movieImage: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
        synopsis: "Dom Cobb is a skilled thief who enters the dreams of others to steal their secrets. He is offered a final job that involves planting an idea into someone's subconscious, a task that proves to be a complex and dangerous journey into the realm of dreams within dreams.",
        key: 3,
    },
    {
        genre: "Fantasy",
        movieName: "Harry Potter and the Deathly Hallows - Part 2",
        movieImage: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
        synopsis: "In the epic conclusion to the Harry Potter series, Harry, Ron, and Hermione continue their quest to destroy the Horcruxes while facing the dark forces of Voldemort's army. The final battle between good and evil takes place at Hogwarts.",
        key: 4,
    },
    {
        genre: "Animation",
        movieName: "Frozen",
        movieImage: "https://lumiere-a.akamaihd.net/v1/images/p_frozen_18373_3131259c.jpeg",
        synopsis: "Princess Anna sets out on a journey to find her estranged sister, Queen Elsa, whose icy powers have unintentionally trapped their kingdom in eternal winter. Along the way, she teams up with an ice harvester, Kristoff, and a talking snowman, Olaf.",
        key: 5,
    },
    {
        genre: "Horror",
        movieName: "Get Out",
        movieImage: "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_FMjpg_UX1000_.jpg",
        synopsis: "A young African-American man, Chris, visits his white girlfriend's family estate, but things take a dark and disturbing turn as he uncovers a series of chilling secrets. The film explores themes of racial tension and psychological horror.",
        key: 6,
    },
    {
        genre: "Adventure",
        movieName: "Pirates of the Caribbean: The Curse of the Black Pearl",
        movieImage: "https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        synopsis: "In this swashbuckling adventure, Captain Jack Sparrow, a charming and eccentric pirate, teams up with blacksmith Will Turner to rescue Elizabeth Swann, the governor's daughter, who has been kidnapped by the cursed crew of the Black Pearl. The crew, under the command of the malevolent Captain Hector Barbossa, is under a terrible curse that transforms them into undead skeletons under the moonlight. Together, Jack, Will, and Elizabeth embark on a thrilling journey filled with humor, action, and supernatural encounters in a quest to break the curse and reclaim the stolen ship, the Black Pearl.",
        key: 7,
    },

]

export default function MovieList() {
    return (
        <div className="container">
            <div className="row">
                {movieData.map((movie, i) => {
                    return (
                        <Fragment key={i}>
                        <Movie key={movie.key} genre={movie.genre} movieName={movie.movieName} movieImg={movie.movieImage} synopsis={movie.synopsis} />
                        <ReviewList className="text-center" id={movie.key}/>
                        </Fragment>
                    )
                })}
            </div>
        </div>
    )
}