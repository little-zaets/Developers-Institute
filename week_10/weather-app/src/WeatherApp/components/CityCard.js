const Card = (props) => {
	console.log(props)
	const {cityInfo} = props;
	console.log(cityInfo);
	return (
      <div className="col-md-3 mb-5">
        <div className="card card-body bg-light text-center h-100">
          <img className="w-50 mb-2" src={cityInfo.WeatherIcon} alt="Weather Icon" />
          <h3 className="text-dark card-title">
            {cityInfo.WeatherText}
          </h3>
          <button className="btn btn-primary" onClick={addToFavourites}>
            Add to Favourites
            <i className="fas fa-chevron-right" />
          </button>
        </div>
      </div>
    );
}
export default Card;