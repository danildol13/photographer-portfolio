import {
  LoganIcon,
  Instagram,
  FaceBook,
  YouTube,
  Twitter,
  Pinterest,
} from "../../constants/Icons";

import css from "./Header.module.css";
import globalCSS from "@/styles/global.module.css";

function Header() {
  return (
    <header className={css.header}>
      <a href="/">
        <LoganIcon />
      </a>
      <div className={`${globalCSS.container} ${css.header_container}`}>
        <nav>
          <ul className={css.navList}>
            <li className={css.navListItem}>
              <a href="/">Home</a>
            </li>
            <li className={css.navListItem}>
              <a href="/">About</a>
            </li>
            <li className={css.navListItem}>
              <a href="/">Gallery</a>
            </li>
            <li className={css.navListItem}>
              <a href="/">Interview</a>
            </li>
            <li className={css.navListItem}>
              <a href="/">Articles</a>
            </li>
            <li className={css.navListItem}>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <ul className={css.socialMediaList}>
        <li>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            {" "}
            <FaceBook />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <Instagram />
          </a>
        </li>
        <li>
          <a href="https://ru.pinterest.com/" target="_blank" rel="noreferrer">
            <Pinterest />
          </a>
        </li>
        <li>
          <a href="https://x.com/?lang=ru" target="_blank" rel="noreferrer">
            <Twitter />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <YouTube />
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
