const MovieCard = (props: {
  name: string;
  image: any;
  summary: string;
  rating: any;
}) => {
  return (
    <section className="movieCard">
      <div className="movieImage">
        <img src={props.image.original} alt={props.name} />
      </div>
      <div className="movieText">
        <h2>{props.name}</h2>
        <div dangerouslySetInnerHTML={{__html: props.summary}} />
        <div>{props.rating.average}</div>
      </div>
    </section>
  );
};

export default MovieCard;
