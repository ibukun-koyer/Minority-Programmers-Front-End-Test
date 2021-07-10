function FundRaisedText({ classes, classes2, fundRaised, totalFund }) {
  return (
    <div className={classes.fundRaisedContainer}>
      <div className={classes.fundRaisedContainerWidth}>
        <div className={classes2.containFundRaisedDes}>
          <span
            className={`${classes2.fundRaisedTitle} ${classes.fundRaisedTitle}`}
          >
            Fund raised
          </span>
          <span
            className={`${classes2.fundRaised} ${classes.fundRaisedCompletionText}`}
          >{`${(fundRaised / totalFund) * 100}% complete`}</span>
        </div>

        <div
          className={`${classes.numberFundRaised} ${classes.fundRaisedRatio}`}
        >
          ${fundRaised.toLocaleString("en", { useGrouping: true })}/$
          {totalFund.toLocaleString("en", { useGrouping: true })}
        </div>
      </div>
    </div>
  );
}
export default FundRaisedText;
