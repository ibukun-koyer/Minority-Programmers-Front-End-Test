function TitleAndImage({ classes, classes2, image, startupName }) {
  return (
    <div className={classes.titleImageContainer}>
      <img src={image} alt="startup" className={classes2.image} />
      <span className={`${classes2.header} ${classes.title}`}>
        {startupName}
      </span>
    </div>
  );
}
export default TitleAndImage;
