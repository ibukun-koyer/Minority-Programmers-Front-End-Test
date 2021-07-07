function Team({ homeClass, mode }) {
  return (
    <div className={`${homeClass.team} ${homeClass[mode + "Mode"]}`}>
      <h1>Teams</h1>
      <div className={homeClass.teamArticle}>
        <div className={homeClass.teamArticleButtonWrap}></div>
        <div className={homeClass.teamArticleTeams}>
          {" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
          minus repellendus saepe totam ratione iste dolor iure dicta impedit
          nostrum quam a dolorum, sapiente voluptate vel porro libero alias.
          Quaerat. Quos error earum enim ab sequi maiores dolorem nesciunt
          recusandae? Amet et, voluptate, odit similique eum magnam, quisquam
          facere necessitatibus id illo delectus. Cum totam quaerat, dolorum in
          nulla tempore. Amet, ut ab. Sequi praesentium, molestiae amet
          provident magnam debitis repudiandae voluptatem harum eos voluptatum
          officia labore consequuntur quis, ad nulla rem recusandae soluta
          repellat, illo enim? Excepturi, nulla inventore.
        </div>
        <div className={homeClass.teamArticleButtonWrap}></div>
      </div>
    </div>
  );
}
export default Team;
