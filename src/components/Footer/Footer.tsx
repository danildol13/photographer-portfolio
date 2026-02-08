import css from "./Footer.module.css";
import { footerData } from "../../types/data";

export default function Footer() {
  return (
    <section className={css.footerSection}>
      <div className={css.footerContainer}>
        <ul className={css.footerList}>
          <li className={css.about}>
            <h3>{footerData.titles[0].title}</h3>
            <p className={css.description}>{footerData.about.description}</p>
            <address className={css.contacts}>
              {footerData.about.contacts.map((contact) => (
                <p className={css.contactItem} key={contact.id}>
                  <svg height={15} width={15} className={css.icon}>
                    <use href={contact.href}></use>
                  </svg>
                  <span className={css.contactData}>{contact.text}</span>
                </p>
              ))}
            </address>
          </li>

          <li>
            <h3>{footerData.titles[1].title}</h3>
            <ul>
              {footerData.links.map((category) => (
                <li key={category.id}>
                  <a href={category.href} className={css.category}>
                    {category.text}
                  </a>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <h3>{footerData.titles[2].title}</h3>
            <ul>
              {footerData.schedule.map((item) => (
                <li key={item.id}>
                  <p className={css.schedule}>{item.text}</p>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <h3>{footerData.titles[3].title}</h3>
            <ul className={css.newsContainer}>
              <li>
                <p className={css.description}>
                  Elit duis porttitor massa tellus nun in velit arcu posuere
                  integer.
                </p>
              </li>
              <li className={css.newsInput}>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Your email address"
                  className={css.emailInput}
                />
                <svg width={26} height={26}>
                  <use href="images/info-icons/infoSpride.svg#icon-la_telegram-plane"></use>
                </svg>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}
