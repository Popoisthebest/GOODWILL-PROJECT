const StarRating = (props) => {
  const setStarRating = () => {
    props.getStarRating(5);
  };

  return (
    <>
      <div>
        <a onClick={setStarRating}>{props.star}</a>
      </div>
    </>
  );
};

export default StarRating;
