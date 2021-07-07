function Landing({ homeClass }) {
  return (
    <div className={homeClass.landing}>
      <div className={homeClass.landingClipWrap}>
        <nav className={homeClass.nav}>
          <img
            src="https://minorityprogrammers.com/assets/images/mpicon.svg"
            alt="title"
          />
          <ul>
            <li>Home</li>
            <li>Incubator</li>
            <li>Learn</li>
          </ul>
        </nav>
        <div className={homeClass.landingClip}>
          <div className={homeClass.landingDottedLine}></div>
          <div className={homeClass.landingText}>
            <div className={homeClass.landingWrapJoin}>
              <button className={homeClass.landingJoin}>Join</button>
            </div>
            <h1>Minority Programmers Association</h1>

            <div className={homeClass.landingTextInvert}></div>

            <div className={homeClass.landingWrapJoin}>
              <button className={homeClass.landingJoin}>Join</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Landing;
