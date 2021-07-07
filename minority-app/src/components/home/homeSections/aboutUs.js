function AboutUs({ homeClass, mode }) {
  return (
    <div className={`${homeClass.aboutUs} ${homeClass[mode + "Mode"]}`}>
      <div className={homeClass.aboutUsArticle}>
        <div className={homeClass.aboutUsArticleText}>
          <h1>About us</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            minus repellendus saepe totam ratione iste dolor iure dicta impedit
            nostrum quam a dolorum, sapiente voluptate vel porro libero alias.
            Quaerat. Quos error earum enim ab sequi maiores dolorem nesciunt
            recusandae? Amet et, voluptate, odit similique eum magnam, quisquam
            facere necessitatibus id illo delectus. Cum totam quaerat, dolorum
            in nulla tempore. Amet, ut ab. Sequi praesentium, molestiae amet
            provident magnam debitis repudiandae voluptatem harum eos voluptatum
            officia labore consequuntur quis, ad nulla rem recusandae soluta
            repellat, illo enim? Excepturi, nulla inventore.
          </p>
        </div>
        <div className={homeClass.aboutUsArticleImage}>
          <img
            className={homeClass.aboutUsArticleImageIcon}
            src={process.env.PUBLIC_URL + "/achievement-5597527_1920.png"}
            alt="illustratrion"
          />
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
