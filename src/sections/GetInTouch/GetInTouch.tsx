import css from "./GetInTouch.module.css";

import Form from "../../components/Form/GetInTouchForm";

export default function GetInTouch() {
  const handleSubmit = (data: string) => {
    console.log(data);
  };
  
  return (
    <section className={css.sectionContainer}>
      <div className={`${css.wholeContainer}`}>
        <div className={css.infoContainer}>
          <h2 className={css.title}>Get in touch with me:</h2>
          <ul className={css.infoList}>
            <li className={css.infoItem}>
              <article className={css.info}>
                <h3 className={css.office}>LA office</h3>
                <p className={css.description}>
                  In velit arcu posuere integer sit amet, consectetur nun
                  adipiscing elit. Duis porttitor massa tellus
                </p>
                <address className={css.contactInfo}>
                  <p className={css.contactItem}>
                    <svg height={15} width={15}>
                      <use href="/images/info-icons/infoSpride.svg#icon-location"></use>
                    </svg>
                    <span className={css.street}>
                      784 Norman Street, Los Angeles
                    </span>
                  </p>
                  <p className={css.contactItem}>
                    <svg height={15} width={15}>
                      <use href="/images/info-icons/infoSpride.svg#icon-phone"></use>
                    </svg>
                    <a href="tel:+49 93 30493943" className={css.phoneNumber}>
                      +49 93 30493943
                    </a>
                  </p>
                  <p className={css.contactItem}>
                    <svg height={15} width={15}>
                      <use href="/images/info-icons/infoSpride.svg#icon-letter"></use>
                    </svg>
                    <a
                      href="mailto:contact@templatesjungle.com"
                      className={css.mail}
                    >
                      contact@templatesjungle.com
                    </a>
                  </p>
                  <a href="#map" className={css.location}>
                    Get location
                  </a>
                </address>
              </article>
            </li>

            <li className={css.infoItem}>
              <article className={css.info}>
                <h3 className={css.office}>NYC office</h3>
                <p className={css.description}>
                  Sit amet, consectetur nun in velit arcu posuere integer.
                  Adipiscing elit duis porttitor massa tellus
                </p>
                <address className={css.contactInfo}>
                  <p className={css.contactItem}>
                    <svg height={15} width={15}>
                      <use href="/images/info-icons/infoSpride.svg#icon-location"></use>
                    </svg>
                    <span className={css.street}>
                      1630 Elm Drive, New York City
                    </span>
                  </p>
                  <p className={css.contactItem}>
                    <svg height={15} width={15}>
                      <use href="/images/info-icons/infoSpride.svg#icon-phone"></use>
                    </svg>
                    <a href="tel:+49 34 36573355" className={css.phoneNumber}>
                      +49 34 36573355
                    </a>
                  </p>
                  <p className={css.contactItem}>
                    <svg height={15} width={15}>
                      <use href="/images/info-icons/infoSpride.svg#icon-letter"></use>
                    </svg>
                    <a
                      href="mailto:contact@templatesjungle.com"
                      className={css.mail}
                    >
                      contact@templatesjungle.com
                    </a>
                  </p>
                  <a href="#map" className={css.location}>
                    Get location
                  </a>
                </address>
              </article>
            </li>
          </ul>
        </div>

        <div className={css.formContainer}>
          <Form onSubmit={handleSubmit} />
        </div>
      </div>
    </section>
  );
}
