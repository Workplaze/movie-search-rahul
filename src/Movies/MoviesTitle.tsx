import {MdLocalMovies} from 'react-icons/md';

const MoviesTitle = (props: {numberOfMovies: number}) => {
    return (
        <section className='moviesTitle'>
            <div>
                <h2> <MdLocalMovies/> Popular Movies : {props.numberOfMovies} Available </h2>
                <hr/>
            </div>
        </section>
    );
}

export default MoviesTitle;