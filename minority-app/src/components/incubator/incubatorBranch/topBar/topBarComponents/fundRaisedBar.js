function FundRaisedBar({ classes, classes2, fundRaised, totalFund }) {
  return (
    <div className={`${classes2.fullBar} ${classes.fundRaisedBar}`}>
      <div
        className={classes2.actualBar}
        style={{ width: `${(fundRaised / totalFund) * 100}%` }}
      ></div>
    </div>
  );
}
export default FundRaisedBar;
