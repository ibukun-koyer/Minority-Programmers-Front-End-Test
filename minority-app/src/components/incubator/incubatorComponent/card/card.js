import { Link } from "react-router-dom";
import classes from "./card.module.css";

function Card({ startup, style, ignore }) {
  const { image, startupName, description, fundRaised, totalFund, userID } =
    startup;

  return (
    <div className={classes.card} style={style}>
      <div>
        <img src={image} alt="startup" className={classes.image} />
        <span className={classes.header}>{startupName}</span>
      </div>
      {ignore ? null : <p className={classes.des}>{description}</p>}

      <div className={classes.containFundRaisedDes}>
        <span className={classes.fundRaisedTitle}>Fund raised</span>
        <span className={classes.fundRaised}>{`${
          (fundRaised / totalFund) * 100
        }% complete`}</span>
      </div>
      <div className={classes.numberFundRaised}>
        ${fundRaised.toLocaleString("en", { useGrouping: true })}/$
        {totalFund.toLocaleString("en", { useGrouping: true })}
      </div>
      <div className={classes.fullBar}>
        <div
          className={classes.actualBar}
          style={{ width: `${(fundRaised / totalFund) * 100}%` }}
        ></div>
      </div>
      {ignore ? null : (
        <div className={classes.wrapBtn}>
          <button className={classes.fundStartUpBtn}>Fund Startup</button>
          <button className={classes.learnMoreBtn}>
            <Link to={`/startup-info/${userID}`}>Learn More</Link>
          </button>
        </div>
      )}
    </div>
  );
}
export default Card;
