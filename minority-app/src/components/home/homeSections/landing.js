function Landing({ homeClass, mode, setMode }) {
  function modeChange(newMode) {
    if (mode !== newMode) {
      localStorage.setItem("mode", newMode);
      setMode(newMode);
    }
  }
  return (
    <div className={homeClass.landing}>
      <div
        className={`${homeClass.dark} ${
          mode === "dark" ? homeClass.modeSelected : ""
        }`}
        onClick={() => {
          modeChange("dark");
        }}
      >
        Dark mode
      </div>
      <div
        className={`${homeClass.light} ${
          mode === "light" ? homeClass.modeSelected : ""
        }`}
        onClick={() => {
          modeChange("light");
        }}
      >
        Light mode
      </div>
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
            <div className={homeClass.landingButtonWrap}>
              <button className={homeClass.landingButton}>Join</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Landing;
