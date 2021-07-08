function Contact({ id, homeClass, mode }) {
  return (
    <div className={`${homeClass.contactUs} ${homeClass[mode + "Mode"]}`}>
      <h1>Contact us</h1>
      <div className={homeClass.contactUsArticle}>
        <div>
          <div className={homeClass.contactUsForm}>
            <form method="POST" name="sendmessage" netlify="true">
              <label htmlFor="name" className={homeClass.formLabel}>
                Name<sup>*</sup>
              </label>
              <input
                name="name"
                id="name"
                type="text"
                className={homeClass.entry}
              />
              <label htmlFor="email" className={homeClass.formLabel}>
                Email<sup>*</sup>
              </label>
              <input
                name="email"
                id="email"
                type="text"
                className={homeClass.entry}
              />
              <label htmlFor="message" className={homeClass.formLabel}>
                Message<sup>*</sup>
              </label>
              <textarea
                style={{ resize: "none" }}
                className={`${homeClass.entry} ${homeClass.message}`}
                id="message"
                name="message"
              ></textarea>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <button className={homeClass.sendMessage}>Send</button>
              </div>
            </form>
          </div>
          <div className={homeClass.contactUsSocial}>
            <div className={homeClass.contactUsContainSocial}>
              <i
                className={`fa fa-instagram ${homeClass.socialIcon}`}
                aria-hidden="true"
              ></i>
              <div className={homeClass.columnDimacator}></div>
              <i
                className={`fa fa-facebook-square ${homeClass.socialIcon}`}
                aria-hidden="true"
              ></i>
              <div className={homeClass.columnDimacator}></div>
              <i
                className={`fa fa-flickr ${homeClass.socialIcon}`}
                aria-hidden="true"
              ></i>
              <div className={homeClass.rowDimacator}></div>
              <div className={homeClass.blanks}></div>
              <div className={homeClass.rowDimacator}></div>
              <div className={homeClass.blanks}></div>
              <div className={homeClass.rowDimacator}></div>
              <i
                className={`fa fa-github-square ${homeClass.socialIcon}`}
                aria-hidden="true"
              ></i>
              <div className={homeClass.columnDimacator}></div>
              <i
                className={`fa fa-dribbble ${homeClass.socialIcon}`}
                aria-hidden="true"
              ></i>
              <div className={homeClass.columnDimacator}></div>
              <i
                className={`fa fa-linkedin-square ${homeClass.socialIcon}`}
                aria-hidden="true"
              ></i>
              <div className={homeClass.rowDimacator}></div>
              <div className={homeClass.blanks}></div>
              <div className={homeClass.rowDimacator}></div>
              <div className={homeClass.blanks}></div>
              <div className={homeClass.rowDimacator}></div>
              <i
                className={`fa fa-reddit-square ${homeClass.socialIcon}`}
                aria-hidden="true"
              ></i>
              <div className={homeClass.columnDimacator}></div>
              <i
                className={`fa fa-stack-exchange ${homeClass.socialIcon}`}
                aria-hidden="true"
              ></i>
              <div className={homeClass.columnDimacator}></div>
              <i
                className={`fa fa-twitch ${homeClass.socialIcon}`}
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </div>
      </div>
      <footer className={homeClass.footer}>
        © Copyright 2021 by Minority Programmers Association
      </footer>
    </div>
  );
}
export default Contact;
