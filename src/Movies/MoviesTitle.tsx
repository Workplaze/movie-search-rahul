import { useContext } from 'react';
import {MdLocalMovies} from 'react-icons/md';
import { ThemeContext } from '../context/Theme';
import { lightTheme, darkTheme } from '../util/themeStyles';

const MoviesTitle = (props: {numberOfMovies: number}) => {
    const theme = useContext(ThemeContext);
    const styles = theme.mode === 'light' ? lightTheme : darkTheme;
    return (
        <section className='moviesTitle' style={styles}>
            <div>
                <h2> <MdLocalMovies/> Popular Movies : {props.numberOfMovies} Available </h2>
                <hr/>
            </div>
        </section>
    );
}

export default MoviesTitle;